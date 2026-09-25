/* global process */

import { defineConfig, loadEnv } from 'vite'
import tailwindcss from "@tailwindcss/vite";
import react from '@vitejs/plugin-react'

function sendJson(response, status, body) {
  response.statusCode = status
  response.setHeader('Content-Type', 'application/json')
  response.end(JSON.stringify(body))
}

function readBody(request) {
  return new Promise((resolve, reject) => {
    let body = ''
    request.setEncoding('utf8')
    request.on('data', (chunk) => {
      body += chunk
    })
    request.on('end', () => resolve(body))
    request.on('error', reject)
  })
}

function telegramDevApi(env) {
  return {
    name: 'telegram-dev-api',
    configureServer(server) {
      server.middlewares.use('/api/send-telegram', async (request, response) => {
        if (request.method !== 'POST') {
          return sendJson(response, 405, { ok: false, error: 'Method not allowed' })
        }

        const botToken = env.TELEGRAM_BOT_TOKEN
        const chatId = env.TELEGRAM_CHAT_ID

        if (!botToken || !chatId) {
          return sendJson(response, 500, { ok: false, error: 'Telegram bot token or chat id is missing' })
        }

        let payload
        try {
          payload = JSON.parse(await readBody(request) || '{}')
        } catch {
          return sendJson(response, 400, { ok: false, error: 'Invalid JSON body' })
        }

        const text = typeof payload?.text === 'string' ? payload.text.trim() : ''
        if (!text) {
          return sendJson(response, 400, { ok: false, error: 'Message text is required' })
        }

        try {
          const telegramResponse = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              chat_id: chatId,
              text,
              parse_mode: 'HTML',
              disable_web_page_preview: true
            })
          })

          if (!telegramResponse.ok) {
            const errorText = await telegramResponse.text()
            console.error('Telegram sendMessage failed:', errorText)
            return sendJson(response, 502, { ok: false, error: 'Telegram message failed' })
          }

          return sendJson(response, 200, { ok: true })
        } catch (error) {
          console.error('Telegram sendMessage request failed:', error)
          return sendJson(response, 502, { ok: false, error: 'Telegram request failed' })
        }
      })
    }
  }
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [telegramDevApi(env), tailwindcss(), react()],
  }
})
