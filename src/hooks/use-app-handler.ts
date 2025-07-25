import * as pdfMake from 'pdfmake/build/pdfmake'
import * as pdfFonts from 'pdfmake/build/vfs_fonts'
import { useEffect, useState } from 'react'

import {
  TAlertParams,
  TAlertProps,
  TBetFormProps,
  TContactFormData,
  TContactFormProps,
  TDialogParams,
  TDialogProps,
  TWelcomeProps
} from '@/components'
import { contact, data, TData, TDataKey } from '@/constants'
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
  key: TDataKey
  index: number
  teamKey: 'home' | 'away'
  value: string | number
}

export const useAppHandler = () => {
  ;(pdfMake as any).vfs = pdfFonts.vfs

  const defaultBets = getFromLocalStorage('data')
  const defaultContact = getFromLocalStorage('contact')
  const isFirstAccess = !!getFromLocalStorage('first-access')

  const hasBet = Object.keys(defaultBets).length

  const [bets, setBets] = useState<TData>(hasBet > 0 ? defaultBets : data)
  const [alert, setAlert] = useState<TAlertParams | null>(null)
  const [dialog, setDialog] = useState<TDialogParams | null>(null)
  const [contactFormIsOpened, setContactFormIsOpened] = useState(false)
  const [welcomeModalIsOpened, setWelcomeModalIsOpened] = useState(false)

  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (isFirstAccess) {
      setWelcomeModalIsOpened(true)
      saveToLocalStorage('first-access', false)
    }
  }, [isFirstAccess])

  const handleChange = ({ key, index, teamKey, value }: TBetChangeParams) => {
    setBets((bets) => {
      bets[key]![index].result[teamKey === 'home' ? 0 : 1] = value
      saveToLocalStorage('data', bets)
      return bets
    })
  }

  const handleClear = () => {
    setBets(data)
    saveToLocalStorage('data', data)
    setDialog(null)
    setAlert({
      severity: 'success',
      title: 'Dados limpos com sucesso!'
    })
  }

  const handleBetFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const invalidBet = hasInvalidBet(bets)

    if (invalidBet) {
      setAlert({
        severity: 'error',
        title: 'Existem campos com dados inválidos!'
      })
      applyInputFocus(e.currentTarget.elements)
      return
    }

    setContactFormIsOpened(true)
  }

  const handleContactFormSubmit = async (data: TContactFormData) => {
    const doc = pdf(bets, { ...data, email: data.email || 'Não informado' })
    pdfMake.createPdf(doc).download()
    setContactFormIsOpened(false)
    saveToLocalStorage('contact', data)
    try {
      setIsLoading(true)
      const html = dataObjectToHtml(bets)
      await sendEmail(
        data.email ? data : { ...data, email: contact.defaultMail },
        html
      )
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

  const welcomeProps: TWelcomeProps = {
    isOpened: welcomeModalIsOpened,
    isFirstAccess,
    handleClose: () => setWelcomeModalIsOpened(false)
  }

  const handleWelcomeModalOpen = () => setWelcomeModalIsOpened(true)

  return {
    betFormProps,
    alertProps,
    contactFormProps,
    dialogProps,
    welcomeProps,
    isLoading,
    handleWelcomeModalOpen
  }
}
