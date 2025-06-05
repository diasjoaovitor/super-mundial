import { TContactFormData } from '@/components'
import { TData } from '@/constants'

const LOCAL_STORAGE_KEY = 'bolao-2025-'

type TKey = 'data' | 'contact'

export const saveToLocalStorage = (
  key: TKey,
  value: TData | TContactFormData
) => {
  localStorage.setItem(LOCAL_STORAGE_KEY + key, JSON.stringify(value))
}

export const getFromLocalStorage = (key: TKey) => {
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY + key) || '{}')
}

export const hasInvalidBet = (bet: TData) => {
  return Object.values(bet).some((group) =>
    group.some(({ result }) => result.some((value) => !value))
  )
}

export const applyInputFocus = (elements: HTMLFormControlsCollection) => {
  for (const element of elements) {
    if (element instanceof HTMLInputElement) {
      if (element.value === '') {
        element.focus()
        break
      }
    }
  }
}

export const phoneMask = (value: string) => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{4})\d+$/, '$1')
}
