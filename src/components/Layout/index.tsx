import { CssBaseline, ThemeProvider } from '@mui/material'

import { darkTheme } from './theme'

type TLayoutProps = {
  children: React.ReactNode
}

export const Layout = ({ children }: TLayoutProps) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
