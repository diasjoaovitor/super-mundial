import { Container, Typography } from '@mui/material'

import { Alert, BetForm, ContactForm,Header, Layout } from '@/components'
import { useAppHandler } from '@/hooks'

export const App = () => {
  const { betFormProps, alertProps, contactFormProps } = useAppHandler()

  return (
    <Layout>
      <Header />
      <Container component="main">
        <Typography component="h2" variant="h4" sx={{ mb: 2 }}>
          Preencha seus palpites
        </Typography>
        <BetForm {...betFormProps} />
        <ContactForm {...contactFormProps} />
      </Container>
      {alertProps && <Alert {...alertProps} />}
    </Layout>
  )
}

export default App
