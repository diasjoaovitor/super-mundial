import { WhatsApp } from '@mui/icons-material'
import { Box, Container, Link, Typography } from '@mui/material'

export const Header = () => {
  return (
    <Box component="header">
      <Container sx={{ textAlign: 'center', py: 2 }}>
        <Typography component="h1" variant="h6">
          Bolão Super Mundial de Clubes 2025
        </Typography>
        <Link
          href="https://api.whatsapp.com/send?phone=5577981329155"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            justifyContent: 'center'
          }}
        >
          <WhatsApp /> Organizado por Marcelo Panthio 3D
        </Link>
      </Container>
    </Box>
  )
}
