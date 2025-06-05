import { CSSObject } from '@emotion/react'
import { Close } from '@mui/icons-material'
import {
  Box,
  IconButton,
  Modal as MuiModal,
  Paper,
  SxProps,
  Typography
} from '@mui/material'
import { ReactElement } from 'react'

import * as S from './style'

export type TModalProps = {
  isOpened: boolean
  title: string
  handleClose(): void
  sx?: SxProps
}

export const Modal = ({
  isOpened,
  title,
  children,
  handleClose,
  sx
}: TModalProps & { children: ReactElement }) => {
  return (
    <MuiModal sx={S.Wrapper} open={isOpened} onClose={handleClose}>
      <Paper sx={{ ...S.Content, ...(sx as CSSObject) }}>
        <Box sx={S.Header}>
          <Typography component="h2" variant="h5">
            {title}
          </Typography>
          <IconButton onClick={handleClose}>
            <Close />
          </IconButton>
        </Box>
        {children}
      </Paper>
    </MuiModal>
  )
}
