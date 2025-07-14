export type TGame = {
  date: string
  time: string
  home: string
  away: string
  result: [string | number | null, string | number | null]
}

export type TDataKey = 'Fase de Grupos' | 'Oitavas de Final'

export type TData = Partial<Record<TDataKey, TGame[]>>

export const data: TData = {
  'Oitavas de Final': [
    {
      date: 'ter 12/ago',
      time: '19:00',
      home: 'Fortaleza',
      away: 'Vélez Sarsfield',
      result: [null, null]
    },
    {
      date: 'ter 12/ago',
      time: '21:30',
      home: 'Atletico Nacional',
      away: 'São Paulo',
      result: [null, null]
    },
    {
      date: 'ter 12/ago',
      time: '21:30',
      home: 'Peñarol',
      away: 'Racing',
      result: [null, null]
    },
    {
      date: 'qua 13/ago',
      time: '19:00',
      home: 'Cerro Porteño',
      away: 'Estudiantes',
      result: [null, null]
    },
    {
      date: 'qua 13/ago',
      time: '21:30',
      home: 'Flamengo',
      away: 'Internacional',
      result: [null, null]
    },
    {
      date: 'qui 14/ago',
      time: '19:00',
      home: 'Botafogo',
      away: 'LDU',
      result: [null, null]
    },
    {
      date: 'qui 14/ago',
      time: '21:30',
      home: 'Libertad',
      away: 'River Plate',
      result: [null, null]
    },
    {
      date: 'qui 14/ago',
      time: '21:30',
      home: 'Universitário',
      away: 'Palmeiras',
      result: [null, null]
    },
    {
      date: 'ter 19/ago',
      time: '19:00',
      home: 'Vélez Sarsfield',
      away: 'Fortaleza',
      result: [null, null]
    },
    {
      date: 'ter 19/ago',
      time: '21:30',
      home: 'São Paulo',
      away: 'Atletico Nacional',
      result: [null, null]
    },
    {
      date: 'ter 19/ago',
      time: '21:30',
      home: 'Racing',
      away: 'Peñarol',
      result: [null, null]
    },
    {
      date: 'qua 20/ago',
      time: '21:30',
      home: 'Estudiantes',
      away: 'Cerro Porteño',
      result: [null, null]
    },
    {
      date: 'qua 20/ago',
      time: '21:30',
      home: 'Internacional',
      away: 'Flamengo',
      result: [null, null]
    },
    {
      date: 'qui 21/ago',
      time: '19:00',
      home: 'LDU',
      away: 'Botafogo',
      result: [null, null]
    },
    {
      date: 'qui 21/ago',
      time: '21:30',
      home: 'River Plate',
      away: 'Libertad',
      result: [null, null]
    },
    {
      date: 'qui 21/ago',
      time: '21:30',
      home: 'Palmeiras',
      away: 'Universitário',
      result: [null, null]
    }
  ]
}
