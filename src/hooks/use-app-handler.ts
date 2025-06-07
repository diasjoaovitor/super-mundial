import * as pdfMake from 'pdfmake/build/pdfmake'
import * as pdfFonts from 'pdfmake/build/vfs_fonts'
import { useState } from 'react'

import {
  TAlertParams,
  TAlertProps,
  TBetFormProps,
  TContactFormData,
  TContactFormProps,
  TDialogParams,
  TDialogProps
} from '@/components'
import { data, TData, TGroup } from '@/constants'
import { pdf } from '@/functions'
import { sendEmail } from '@/functions/email'
import {
  applyInputFocus,
  dataObjectToHtml,
  getFromLocalStorage,
  hasInvalidBet,
  saveToLocalStorage
} from '@/utils'

export type TBetChangeParams = {
  group: TGroup
  index: number
  key: 'home' | 'away'
  value: string | number
}

export const useAppHandler = () => {
  ;(pdfMake as any).vfs = pdfFonts.vfs

  const defaultBets = getFromLocalStorage('data')
  const defaultContact = getFromLocalStorage('contact')

  const [bets, setBets] = useState<TData>(
    Object.keys(defaultBets).length > 0 ? defaultBets : data
  )
  const [alert, setAlert] = useState<TAlertParams | null>(null)
  const [dialog, setDialog] = useState<TDialogParams | null>(null)
  const [contactFormIsOpened, setContactFormIsOpened] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = ({ group, index, key, value }: TBetChangeParams) => {
    setBets((bets) => {
      bets[group][index].result[key === 'home' ? 0 : 1] = value
      saveToLocalStorage('data', bets)
      return bets
    })
  }

  const handleClear = () => {
    setBets(data)
    saveToLocalStorage('data', data)
    setDialog(null)
  }

  const handleBetFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const invalidBet = hasInvalidBet(bets)

    if (invalidBet) {
      setAlert({
        severity: 'error',
        title: 'Todos os campos são obrigatórios'
      })
      applyInputFocus(e.currentTarget.elements)
      return
    }

    setContactFormIsOpened(true)
  }

  const handleContactFormSubmit = async (data: TContactFormData) => {
    const doc = pdf(bets, { ...data, email: data.email || 'Não informado' })
    pdfMake.createPdf(doc).open()
    setContactFormIsOpened(false)
    saveToLocalStorage('contact', data)
    if (!data.email) return
    try {
      setIsLoading(true)
      const html = dataObjectToHtml(bets)
      await sendEmail(data, html)
      setAlert({
        severity: 'success',
        title: 'Email enviado com sucesso!'
      })
    } catch (error) {
      console.error(error)
      setAlert({
        severity: 'error',
        title: 'Erro ao enviar email!',
        description: 'Envie o PDF manualmente.'
      })
    } finally {
      setIsLoading(false)
    }
  }

  const betFormProps: TBetFormProps = {
    bets,
    handleChange,
    handleClear: () => {
      setDialog({
        title: 'Deseja realmente limpar os dados?',
        handleAccept: handleClear
      })
    },
    handleSubmit: handleBetFormSubmit
  }

  const alertProps: TAlertProps | null = alert
    ? {
        open: !!alert,
        ...alert,
        handleClose: () => setAlert(null)
      }
    : null

  const dialogProps: TDialogProps | null = dialog
    ? {
        open: !!dialog,
        ...dialog,
        handleClose: () => setDialog(null)
      }
    : null

  const contactFormProps: TContactFormProps = {
    isOpened: contactFormIsOpened,
    handleClose: () => setContactFormIsOpened(false),
    data: defaultContact,
    onSubmit: handleContactFormSubmit
  }

  return {
    betFormProps,
    alertProps,
    dialogProps,
    contactFormProps,
    isLoading
  }
}
