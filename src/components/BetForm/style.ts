import { SxProps, Theme } from '@mui/material'

export const Wrapper: SxProps<Theme> = {
  display: 'grid',
  gridTemplateColumns: {
    xs: '1fr',
    md: '1fr 1fr'
  },
  gap: 2
}

export const Grid: SxProps<Theme> = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  alignItems: 'center',
  '& input': {
    textAlign: 'center'
  }
}
