import { TDocumentDefinitions } from 'pdfmake/interfaces'

import { TData } from '@/constants'

type TInfo = {
  name: string
  email: string
  phone: string
}

export const columns = [
  'J',
  'Data',
  'Hora',
  'Grupo',
  'Mandante',
  '',
  '',
  '',
  'Visitante'
]

export const pdf = (data: TData, info: TInfo): TDocumentDefinitions => {
  const formattedData = Object.entries(data).flatMap(([group, games]) =>
    games.map((game, index) => [
      { text: index + 1 },
      { text: game.date },
      { text: game.time },
      { text: group },
      { text: game.home },
      { text: game.result[0] },
      { text: 'X' },
      { text: game.result[1] },
      { text: game.away }
    ])
  )

  return {
    pageSize: 'TABLOID',
    content: [
      {
        table: {
          body: [
            [
              {
                text: ['Nome'],
                border: [true, true, true, false]
              },
              {
                text: ['Email'],
                border: [true, true, true, false]
              },
              {
                text: ['Telefone'],
                border: [true, true, true, false]
              }
            ],
            [
              {
                text: [info.name]
              },
              {
                text: [info.email]
              },
              {
                text: [info.phone]
              }
            ]
          ]
        }
      },
      {
        text: [''],
        margin: [0, 0, 0, 20]
      },
      {
        table: {
          body: [columns, ...formattedData]
        }
      }
    ]
  }
}
