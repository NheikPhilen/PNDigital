/* global process */

const TELEGRAM_API_BASE = 'https://api.telegram.org'

function sendJson(response, status, body) {
  response.status(status).json(body)
}

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    return sendJson(response, 405, { ok: false, error: 'Method not allowed' })
  }

  const botToken = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID

  if (!botToken || !chatId) {
    return sendJson(response, 500, { ok: false, error: 'Telegram bot token or chat id is missing' })
  }

  let payload
  try {
    payload = typeof request.body === 'string' ? JSON.parse(request.body || '{}') : request.body
  } catch {
    return sendJson(response, 400, { ok: false, error: 'Invalid JSON body' })
  }

  const text = typeof payload?.text === 'string' ? payload.text.trim() : ''
  if (!text) {
    return sendJson(response, 400, { ok: false, error: 'Message text is required' })
  }

  const telegramResponse = await fetch(`${TELEGRAM_API_BASE}/bot${botToken}/sendMessage`, {
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
}
