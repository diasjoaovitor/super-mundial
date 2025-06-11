export type TGame = {
  date: string
  time: string
  local: string
  home: string
  away: string
  result: [string | number | null, string | number | null]
}

export type TGroup = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H'

export type TData = Record<TGroup, TGame[]>

export const data: TData = {
  A: [
    {
      date: '14/jun',
      time: '21:00',
      local: 'Miami',
      home: 'Inter Miami (EUA)',
      away: 'Al-Ahly (EGI)',
      result: [null, null]
    },
    {
      date: '15/jun',
      time: '19:00',
      local: 'Nova Jersey',
      home: 'Porto (POR)',
      away: 'Palmeiras',
      result: [null, null]
    },
    {
      date: '19/jun',
      time: '13:00',
      local: 'Nova Jersey',
      home: 'Al-Ahly (EGI)',
      away: 'Palmeiras',
      result: [null, null]
    },
    {
      date: '19/jun',
      time: '16:00',
      local: 'Atlanta',
      home: 'Inter Miami (EUA)',
      away: 'Porto (POR)',
      result: [null, null]
    },
    {
      date: '23/jun',
      time: '22:00',
      local: 'Miami',
      home: 'Palmeiras',
      away: 'Inter Miami (EUA)',
      result: [null, null]
    },
    {
      date: '23/jun',
      time: '22:00',
      local: 'Nova Jersey',
      home: 'Al-Ahly (EGI)',
      away: 'Porto (POR)',
      result: [null, null]
    }
  ],
  B: [
    {
      date: '15/jun',
      time: '16:00',
      local: 'Rose Bowl',
      home: 'Atl Madrid (ESP)',
      away: 'PSG (FRA)',
      result: [null, null]
    },
    {
      date: '15/jun',
      time: '23:00',
      local: 'Seattle Field',
      home: 'Seattle S. (EUA)',
      away: 'Botafogo',
      result: [null, null]
    },
    {
      date: '19/jun',
      time: '19:00',
      local: 'Seattle Field',
      home: 'Seattle S. (EUA)',
      away: 'Atl Madrid (ESP)',
      result: [null, null]
    },
    {
      date: '19/jun',
      time: '22:00',
      local: 'Rose Bowl',
      home: 'Botafogo',
      away: 'PSG (FRA)',
      result: [null, null]
    },
    {
      date: '23/jun',
      time: '16:00',
      local: 'Seattle Field',
      home: 'PSG (FRA)',
      away: 'Seattle S. (EUA)',
      result: [null, null]
    },
    {
      date: '23/jun',
      time: '16:00',
      local: 'Rose Bowl',
      home: 'Botafogo',
      away: 'Atl Madrid (ESP)',
      result: [null, null]
    }
  ],
  C: [
    {
      date: '15/jun',
      time: '13:00',
      local: 'TQL Stadium',
      home: 'Auckland C. (NZL)',
      away: 'B. Munique (ALE)',
      result: [null, null]
    },
    {
      date: '16/jun',
      time: '19:00',
      local: 'Miami',
      home: 'Benfica (POR)',
      away: 'B. Juniors (ARG)',
      result: [null, null]
    },
    {
      date: '20/jun',
      time: '13:00',
      local: 'Orlando',
      home: 'Benfica (POR)',
      away: 'Auckland C. (NZL)',
      result: [null, null]
    },
    {
      date: '20/jun',
      time: '22:00',
      local: 'Miami',
      home: 'B. Juniors (ARG)',
      away: 'B. Munique (ALE)',
      result: [null, null]
    },
    {
      date: '24/jun',
      time: '16:00',
      local: 'Charlotte',
      home: 'B. Munique (ALE)',
      away: 'Benfica (POR)',
      result: [null, null]
    },
    {
      date: '24/jun',
      time: '16:00',
      local: 'Geodis Park',
      home: 'B. Juniors (ARG)',
      away: 'Auckland C. (NZL)',
      result: [null, null]
    }
  ],
  D: [
    {
      date: '16/jun',
      time: '16:00',
      local: 'Atlanta',
      home: 'Los Angeles (EUA)',
      away: 'Chelsea (ING)',
      result: [null, null]
    },
    {
      date: '16/jun',
      time: '22:00',
      local: 'Filadélfia',
      home: 'Espérance T. (TUN)',
      away: 'Flamengo',
      result: [null, null]
    },
    {
      date: '20/jun',
      time: '15:00',
      local: 'Filadélfia',
      home: 'Chelsea (ING)',
      away: 'Flamengo',
      result: [null, null]
    },
    {
      date: '20/jun',
      time: '19:00',
      local: 'Geodis Park',
      home: 'Los Angeles (EUA)',
      away: 'Espérance T. (TUN)',
      result: [null, null]
    },
    {
      date: '24/jun',
      time: '22:00',
      local: 'Camping World',
      home: 'Flamengo',
      away: 'Los Angeles (EUA)',
      result: [null, null]
    },
    {
      date: '24/jun',
      time: '22:00',
      local: 'Filadélfia',
      home: 'Chelsea (ING)',
      away: 'Espérance T. (TUN)',
      result: [null, null]
    }
  ],
  E: [
    {
      date: '17/jun',
      time: '16:00',
      local: 'Seattle Field',
      home: 'Urawa Reds (JAP)',
      away: 'River Plate (ARG)',
      result: [null, null]
    },
    {
      date: '17/jun',
      time: '22:00',
      local: 'Rose Bowl',
      home: 'Inter de Milão (ITA)',
      away: 'Monterrey (MEX)',
      result: [null, null]
    },
    {
      date: '21/jun',
      time: '16:00',
      local: 'Seattle Field',
      home: 'Inter de Milão (ITA)',
      away: 'Urawa Reds (JAP)',
      result: [null, null]
    },
    {
      date: '21/jun',
      time: '22:00',
      local: 'Rose Bowl',
      home: 'Monterrey (MEX)',
      away: 'River Plate (ARG)',
      result: [null, null]
    },
    {
      date: '25/jun',
      time: '22:00',
      local: 'Seattle Field',
      home: 'River Plate (ARG)',
      away: 'Inter de Milão (ITA)',
      result: [null, null]
    },
    {
      date: '25/jun',
      time: '22:00',
      local: 'Rose Bowl',
      home: 'Monterrey (MEX)',
      away: 'Urawa Reds (JAP)',
      result: [null, null]
    }
  ],
  F: [
    {
      date: '17/jun',
      time: '13:00',
      local: 'Nova Jersey',
      home: 'Borussia D. (ALE)',
      away: 'Fluminense',
      result: [null, null]
    },
    {
      date: '17/jun',
      time: '19:00',
      local: 'Orlando',
      home: 'M. Sundowns (AFS)',
      away: 'Ulsan (COR)',
      result: [null, null]
    },
    {
      date: '21/jun',
      time: '13:00',
      local: 'TQL Stadium',
      home: 'M. Sundowns (AFS)',
      away: 'Borussia D. (ALE)',
      result: [null, null]
    },
    {
      date: '21/jun',
      time: '19:00',
      local: 'Nova Jersey',
      home: 'Ulsan (COR)',
      away: 'Fluminense',
      result: [null, null]
    },
    {
      date: '25/jun',
      time: '16:00',
      local: 'Miami',
      home: 'Fluminense',
      away: 'M. Sundowns (AFS)',
      result: [null, null]
    },
    {
      date: '25/jun',
      time: '16:00',
      local: 'TQL Stadium',
      home: 'Ulsan (COR)',
      away: 'Borussia D. (ALE)',
      result: [null, null]
    }
  ],
  G: [
    {
      date: '18/jun',
      time: '13:00',
      local: 'Filadélfia',
      home: 'Wydad C. (MAR)',
      away: 'Manchester City',
      result: [null, null]
    },
    {
      date: '18/jun',
      time: '22:00',
      local: 'Buzzard Point',
      home: 'Juventus (ITA)',
      away: 'Al Ain (EAU)',
      result: [null, null]
    },
    {
      date: '22/jun',
      time: '13:00',
      local: 'Filadélfia',
      home: 'Juventus (ITA)',
      away: 'Wydad C. (MAR)',
      result: [null, null]
    },
    {
      date: '22/jun',
      time: '22:00',
      local: 'Atlanta',
      home: 'Al Ain (EAU)',
      away: 'Manchester City',
      result: [null, null]
    },
    {
      date: '26/jun',
      time: '16:00',
      local: 'Camping World',
      home: 'Manchester City',
      away: 'Juventus (ITA)',
      result: [null, null]
    },
    {
      date: '26/jun',
      time: '16:00',
      local: 'Buzzard Point',
      home: 'Al Ain (EAU)',
      away: 'Wydad C. (MAR)',
      result: [null, null]
    }
  ],
  H: [
    {
      date: '18/jun',
      time: '16:00',
      local: 'Miami',
      home: 'Al-Hilal (SAU)',
      away: 'Real Madrid (ESP)',
      result: [null, null]
    },
    {
      date: '18/jun',
      time: '19:00',
      local: 'TQL Stadium',
      home: 'RB Salzburg (AUT)',
      away: 'Pachuca (MEX)',
      result: [null, null]
    },
    {
      date: '22/jun',
      time: '16:00',
      local: 'Charlotte',
      home: 'Pachuca (MEX)',
      away: 'Real Madrid (ESP)',
      result: [null, null]
    },
    {
      date: '22/jun',
      time: '19:00',
      local: 'Buzzard Point',
      home: 'RB Salzburg (AUT)',
      away: 'Al-Hilal (SAU)',
      result: [null, null]
    },
    {
      date: '26/jun',
      time: '22:00',
      local: 'Filadélfia',
      home: 'Real Madrid (ESP)',
      away: 'RB Salzburg (AUT)',
      result: [null, null]
    },
    {
      date: '26/jun',
      time: '22:00',
      local: 'Geodis Park',
      home: 'Pachuca (MEX)',
      away: 'Al-Hilal (SAU)',
      result: [null, null]
    }
  ]
}
