import { Check } from '@mui/icons-material'
import {
  Button,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from '@mui/material'

import { contact } from '@/constants'

import { Modal } from '../Modal'

export type TWelcomeProps = {
  isOpened: boolean
  isFirstAccess: boolean
  handleClose: () => void
}

const infoListItems = [
  'Preencha seus palpites para cada jogo',
  'Salve seus palpites',
  'Forneça seus dados de contato',
  'Será realizado o download do PDF com seus palpites',
  'Você receberá um email com confirmação e instruções de pagamento'
]

const InfoListItem = ({ text }: { text: string }) => (
  <ListItem disablePadding>
    <ListItemIcon sx={{ minWidth: 'auto', mr: 2 }}>
      <Check color="primary" />
    </ListItemIcon>
    <ListItemText primary={text} />
  </ListItem>
)

export const Welcome = ({
  handleClose,
  isOpened,
  isFirstAccess
}: TWelcomeProps) => {
  return (
    <Modal
      title="Bem-vindo ao Bolão do Super Mundial!"
      isOpened={isOpened}
      handleClose={handleClose}
    >
      <>
        <Typography component="p">
          Aqui você pode fazer seus palpites para os jogos do torneio.
        </Typography>

        <Typography component="h3" variant="h6" sx={{ mt: 2 }}>
          Como Funciona
        </Typography>
        <List>
          {infoListItems.map((text, index) => (
            <InfoListItem key={index} text={text} />
          ))}
        </List>

        <Typography component="h3" variant="h6" sx={{ mt: 2, mb: 1 }}>
          Informações de Pagamento
        </Typography>

        <Typography component="p" sx={{ mb: 1 }}>
          <Typography component="span" color="text.secondary" sx={{ mr: 1 }}>
            Valor da aposta:
          </Typography>
          R$ 10,00
        </Typography>
        <Typography component="p">
          <Typography component="span" color="text.secondary" sx={{ mr: 1 }}>
            Chave PIX:
          </Typography>
          <Link href={contact.paymentLink} color="secondary">
            {contact.tel}
          </Link>
        </Typography>

        <Button
          variant="contained"
          onClick={handleClose}
          sx={{ mt: 2, maxWidth: 300 }}
          fullWidth
        >
          {!isFirstAccess ? 'Entendi' : 'Entendi, vamos começar!'}
        </Button>
      </>
    </Modal>
  )
}
