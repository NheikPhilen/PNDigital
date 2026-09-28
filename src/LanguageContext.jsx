import React, { createContext, useContext, useEffect, useState } from 'react'

const englishTranslations = {
  'ទំព័រដើម': 'Home',
  'អំពីយើង': 'About us',
  'សេវាកម្ម': 'Services',
  'សេវាកម្មប៊ូស Post': 'Post Boost Service',
  'សេវាកម្មBoost': 'Boost Service',
  'អាចប៊ូសជារូបភាព រឺVideo': 'Boost images or videos',
  'ការប៊ូសមិនមានកំណត់ចំនួនពេញ១ខែ': 'Unlimited boosting for one month',
  'ផ្ដល់ជូន report ជារៀងរាល់ថ្ងៃ': 'Daily performance reports',
  'សេវាកម្មប៊ូស Live': 'Live Boost Service',
  'អាចLiveម៉ោងណាក៏បានអាស្រ័យលើភ្ញៀវ': 'Schedule a live boost at a time that works for you',
  'សេវាកម្មប៊ូស Tik Tok': 'TikTok Boost Service',
  'រៀបចំCaption និងCaptionសម្រាប់Post': 'Caption writing for posts and videos',
  'អាចប៊ូសម្ដង1Videoរឺច្រើនវីដេអូ(Compaign)': 'Boost one video or run a multi-video campaign',
  'លក់ផេកខ្មែរ': 'Cambodian Facebook Pages',
  'ផេកខ្មែរធម្មតា & ផេក​VIPប៊ូសឡាយ': 'Standard and VIP Live Boost pages',
  'ប្ដូរឈ្មោះផេក': 'Page name changes',
  'ធានាជូនរយៈពេល១ខែ': 'One-month guarantee',
  'free ប៊ូសរយៈពេល១៥ថ្ងៃ': '15 days of free boosting',
  'លក់ Instagram ': 'Instagram Accounts',
  'លក់ Instagram': 'Instagram Accounts',
  'លក់ TikTok': 'TikTok Accounts',
  'មានចាប់ពី 1k-500k': 'Available from 1K to 500K followers',
  'ធានា followerខ្មែរ': 'Cambodian followers guaranteed',
  'Freeដូរឈ្មោះ': 'Free username change',
  'អាចកម្មង់Contentបាន': 'Custom content available',
  'លក់ Group Telegram': 'Telegram Groups for Sale',
  'សេវាកម្មលក់ Group Telegram តាមតម្រូវការរបស់អតិថិជន។': 'Telegram groups available to match customer needs.',
  'ជ្រើសរើស Group តាមតម្រូវការ': 'Choose a group that fits your needs',
  'ពិភាក្សាព័ត៌មានមុនពេលកម្មង់': 'Discuss the details before ordering',
  'តម្លើង System Auto Reply': 'Auto-Reply System Setup',
  'ប្រព័ន្ធឆ្លើយតបស្វ័យប្រវត្តិ': 'Automated reply system',
  'រៀបចំ និងតម្លើងប្រព័ន្ធឆ្លើយតបស្វ័យប្រវត្តិ ដើម្បីជួយឆ្លើយសារអតិថិជន។': 'Set up an automated reply system to help respond to customer messages.',
  'រៀបចំសារឆ្លើយតបតាមតម្រូវការ': 'Create replies tailored to your needs',
  'តម្លើង និងសាកល្បងប្រព័ន្ធ': 'Install and test the system',
  'លក់ផេកខ្មែរ100%': '100% Cambodian Facebook pages',
  'លក់ Page VIP ប៊ូសឡាយ': 'VIP Live Boost pages for sale',
  'លក់ BM Ad Account': 'BM ad accounts for sale',
  'លក់TikTok ចាប់ពី 1k-500k': 'TikTok accounts from 1K to 500K followers',
  'គ្រប់គ្រងលើការប៊ូស និងថែទាំផេកប្រចាំខែ': 'Monthly page boosting and management',
  'តម្លើងផេកធម្មតាទៅជាផេកប៊ូសឡាយបាន': 'Upgrade standard pages for Live Boosting',
  'តម្លើងចំនួន Follower និងដាក់ Blue Tick': 'Grow followers and apply for a Blue Tick',
  'ទទួលធ្វើ Poster Profile & Cover Page': 'Profile posters and cover pages',
  'ទទួលដោះស្រាយបញ្ហាPageគ្រប់ប្រភេទ': 'Help resolve all types of page issues',
  'ភ្នាក់ងារជួយជម្រុញការលក់របស់ម្ចាស់អាជីវកម្មឲ្យចំអតិថិជនគោលដៅ!': 'We help businesses reach the right customers and grow sales.',
  'មើលសេវាកម្ម': 'View services',
  'សេវាកម្មដែលបងប្អូននឹងទទួលបានពី PN Digital.': 'Services from PN Digital',
  'មើលសេវាកម្មទាំងអស់': 'View all services',
  'មើលព័ត៌មានលម្អិត': 'View details',
  'ការលក់': 'Page sales',
  'PN Digital មានលក់ផេកខ្មែរ Followerខ្មែរសុទ្ធ 100%!': 'Cambodian Facebook pages with 100% Cambodian followers.',
  'PN Digital មានសេវាកម្មដូចជា៖': 'Services offered by PN Digital',
  'PN Digital មានផ្ដល់ជូននូវសេវាកម្មប៊ូសផេក ជួយជម្រុញការលក់!': 'We provide page boosting services to help grow sales.',
  'ហេតុអ្វីគួរជ្រើសរើសយក PN Digital?': 'Why choose PN Digital?',
  'គុណភាព': 'Quality',
  'ផេកល្អគុណភាពធានាជូនអតិថិជ​ន ធានាជូន១ខែ និងធានាថាជាFollowerខ្មែរសុទ្ធ100%': 'Quality pages backed by a one-month guarantee and 100% Cambodian followers.',
  'បទពិសោធន៍': 'Experience',
  'ក្រុមការងារមានបទពិសោធន៍ច្រើនឆ្នាំ និងមានតិចនិកប៊ូសច្បាស់លាស់ ចំគោលដៅ ជម្រុញការលក់របស់អាជីវករជាច្រើនអ្នក សុទ្ធតែជាបុគ្គលល្បីៗក្នុងវិស័យអាជីវកម្មOnline': 'Our experienced team uses focused boosting strategies to help online businesses grow sales.',
  'ទំនួលខុសត្រូវ': 'Accountability',
  'ឆ្លើយតបឆាប់រហ័ស តាមដានការឡាយរបស់ភ្ញៀវ ដោះស្រាយបញ្ហាបានភ្លាមៗ និងផ្ញើReportជូនភ្ញៀវជារៀងរាល់ថ្ងៃ': 'We respond quickly, monitor live sessions, resolve issues, and send daily reports.',
  'រូបភាពពីការផ្ដើ់លFeedbacksពីអតិថិជន និងការលក់ផ្សេងៗ': 'Client feedback and sales highlights',
  'តើបងៗកំពុងតែចង់ចាប់ផ្ដើមអាជីវកម្មមែនទេ? អាចប្រឹក្សាយោបល់ជាមួយPN Digitalបាន!': 'Ready to start a business? Talk with PN Digital for advice.',
  'ទំនាក់ទំនងឥឡូវនេះ': 'Contact us now',
  'បងៗពេញចិត្តសេវាកម្មមួយណាអាចពិភាក្សាតាមរយៈ': 'Have a service in mind? Let us know on Telegram.',
  'ក្រុមការងារនឹងធ្វើការទាក់ទងទៅកាន់លេខទូរស័ព្ទខាងលើក្នុងពេលឆាប់': 'Our team will contact you at the phone number above shortly.'
}

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    try {
      return localStorage.getItem('pn-language') === 'en' ? 'en' : 'km'
    } catch {
      return 'km'
    }
  })

  useEffect(() => {
    document.documentElement.lang = language
    try {
      localStorage.setItem('pn-language', language)
    } catch {}
  }, [language])

  const t = (text) => language === 'en' ? englishTranslations[text] || text : text

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used within LanguageProvider')
  return context
}
