import emailjs from '@emailjs/browser'

import { TContactFormData } from '@/components'

export const sendEmail = async (contact: TContactFormData, data: string) => {
  await emailjs.send(
    import.meta.env.VITE_EMAIL_SERVICE_ID,
    import.meta.env.VITE_EMAIL_TEMPLATE_ID,
    {
      email: contact.email,
      name: contact.name,
      bet: data
    },
    import.meta.env.VITE_EMAIL_PUBLIC_KEY
  )
}
