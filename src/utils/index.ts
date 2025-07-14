import { TContactFormData } from '@/components'
import { TData } from '@/constants'
import { columns } from '@/functions'

const LOCAL_STORAGE_KEY = 'bolao-llibertadores-2025'

type TKey = 'data' | 'contact' | 'first-access'

export const saveToLocalStorage = (
  key: TKey,
  value: TData | TContactFormData | boolean
) => {
  localStorage.setItem(LOCAL_STORAGE_KEY + key, JSON.stringify(value))
}

export const getFromLocalStorage = (key: TKey) => {
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY + key) || '{}')
}

export const hasInvalidBet = (bet: TData) => {
  return Object.values(bet).some((group) =>
    group.some(({ result }) =>
      result.some((value) => {
        const number = Number(value)
        if (value !== null && Number.isInteger(number) && number >= 0)
          return false
        return true
      })
    )
  )
}

export const applyInputFocus = (elements: HTMLFormControlsCollection) => {
  for (const element of elements) {
    if (element instanceof HTMLInputElement) {
      if (element.value === '' || Number(element.value) < 0) {
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

export const dataObjectToHtml = (data: TData) => {
  let html =
    '<table style="text-align:center;border-collapse: collapse;"><thead><tr>'
  columns.forEach((col) => {
    html += `<th style="border: 1px solid #000;padding: 8px;">${col}</th>`
  })
  html += '</tr></thead><tbody>'
  Object.entries(data).forEach(([group, matches]) => {
    matches.forEach((match, index) => {
      html += '<tr>'
      ;[
        index + 1,
        match.date,
        match.time,
        group,
        match.home,
        match.result[0],
        'X',
        match.result[1],
        match.away
      ].map((value) => {
        html += `<td style="border: 1px solid #000;padding: 8px;">${value}</td>`
      })
      html += '</tr>'
    })
  })
  html += '</tbody></table>'
  return html
}
