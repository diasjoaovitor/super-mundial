import { Backdrop, CircularProgress } from '@mui/material'

type TLoaderProps = {
  open?: boolean
}

export const Loader = ({ open }: TLoaderProps) => {
  const isLoading = open === undefined ? true : Boolean(open)
  return (
    <Backdrop
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1
      }}
      open={isLoading}
    >
      <CircularProgress />
    </Backdrop>
  )
}
