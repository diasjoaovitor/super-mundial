import {
  Button,
  Dialog as MuiDialog,
  DialogActions,
  DialogTitle
} from '@mui/material'

export type TDialogParams = {
  title: string
  handleAccept(): void
}

export type TDialogProps = {
  open: boolean
  handleClose(): void
} & TDialogParams

export const Dialog = ({
  open,
  title,
  handleClose,
  handleAccept
}: TDialogProps) => {
  return (
    <MuiDialog open={!!open} onClose={handleClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogActions>
        <Button
          autoFocus
          onClick={handleAccept}
          color="error"
          variant="contained"
        >
          Sim
        </Button>
        <Button onClick={handleClose} variant="contained">
          Não
        </Button>
      </DialogActions>
    </MuiDialog>
  )
}
