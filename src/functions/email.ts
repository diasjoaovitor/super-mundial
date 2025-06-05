import emailjs from '@emailjs/browser'

import { TContactFormData } from '@/components'

export const sendEmail = async (data: TContactFormData, pdf: string) => {
  await emailjs.send(
    import.meta.env.VITE_EMAIL_SERVICE_ID,
    import.meta.env.VITE_EMAIL_TEMPLATE_ID,
    {
      email: data.email,
      name: data.name,
      attachment: pdf
    },
    import.meta.env.VITE_EMAIL_PUBLIC_KEY
  )
}
