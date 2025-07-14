import { WhatsApp } from '@mui/icons-material'
import {
  Box,
  Button,
  Container,
  Divider,
  Link,
  Typography
} from '@mui/material'

import { contact } from '@/constants'

type THeaderProps = {
  handleClick(): void
}

export const Header = ({ handleClick }: THeaderProps) => {
  return (
    <Box component="header">
      <Container
        sx={{
          py: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: {
            xs: 'center',
            sm: 'space-between'
          },
          textAlign: {
            xs: 'center'
          },
          flexWrap: 'wrap',
          gap: 2
        }}
      >
        <div>
          <Typography component="h1" variant="h6">
            Bolão da Libertadores 2025
          </Typography>
          <Link
            href={`https://api.whatsapp.com/send?phone=55${contact.tel}`}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              justifyContent: 'center'
            }}
          >
            <WhatsApp /> Organizado por {contact.nameOfOrganizer}
          </Link>
        </div>
        <Button variant="contained" onClick={handleClick}>
          Instruções
        </Button>
      </Container>
      <Divider sx={{ mb: 2 }} />
    </Box>
  )
}
