import { Close } from '@mui/icons-material'
import {
  Alert as MuiAlert,
  AlertTitle,
  IconButton,
  Snackbar
} from '@mui/material'

export type TAlertParams = {
  severity: 'error' | 'info' | 'success' | 'warning'
  title: string
  description?: string
  autoHideDuration?: number
}

export type TAlertProps = {
  open: boolean
  handleClose: () => void
} & TAlertParams

export const Alert = ({
  open,
  severity,
  title,
  description,
  autoHideDuration,
  handleClose
}: TAlertProps) => {
  return (
    <Snackbar
      open={open}
      anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
      autoHideDuration={autoHideDuration || 4000}
      onClose={handleClose}
    >
      <MuiAlert
        severity={severity}
        action={
          <IconButton size="small" onClick={handleClose}>
            <Close fontSize="inherit" />
          </IconButton>
        }
        variant="filled"
      >
        <AlertTitle>{title}</AlertTitle>
        {description}
      </MuiAlert>
    </Snackbar>
  )
}
