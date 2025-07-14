import {
  Box,
  Button,
  ButtonGroup,
  List,
  ListItem,
  ListSubheader,
  Paper,
  TextField,
  Typography
} from '@mui/material'

import { TData } from '@/constants'
import { TBetChangeParams } from '@/hooks'

import * as S from './style'

export type TBetFormProps = {
  bets: TData
  handleChange: (params: TBetChangeParams) => void
  handleClear: () => void
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}
export const BetForm = ({
  bets,
  handleChange,
  handleClear,
  handleSubmit
}: TBetFormProps) => {
  return (
    <Box
      id="bet-form"
      component="form"
      sx={{ pb: 2 }}
      onSubmit={handleSubmit}
      onReset={handleClear}
    >
      <Box sx={S.Wrapper}>
        {Object.entries(bets).map(([key, games]) => {
          return (
            <Paper key={key} sx={{ mb: 2 }}>
              <ListSubheader sx={{ bgcolor: 'warning.light', color: 'black' }}>
                {key}
              </ListSubheader>
              <List>
                {games.map((game, index) => {
                  return (
                    <ListItem key={index} sx={{ flexDirection: 'column' }}>
                      <Box
                        sx={{
                          textAlign: 'center'
                        }}
                      >
                        <Typography
                          variant="caption"
                          color="textSecondary"
                          sx={{ mr: 1 }}
                        >
                          {`${game.date} ${game.time}`}
                        </Typography>
                      </Box>
                      <Box sx={S.Grid}>
                        <Typography sx={{ textAlign: 'right' }}>
                          {game.home}
                        </Typography>
                        <Box
                          sx={{ ...S.Grid, textAlign: 'center', mx: 2, gap: 1 }}
                        >
                          <TextField
                            type="number"
                            variant="outlined"
                            defaultValue={game.result[0]}
                            onChange={(e) =>
                              handleChange({
                                key: key as any,
                                index,
                                teamKey: 'home',
                                value: e.target.value
                              })
                            }
                            sx={{ minWidth: 50 }}
                            slotProps={{ htmlInput: { min: 0 } }}
                          />
                          <Typography>X</Typography>
                          <TextField
                            type="number"
                            variant="outlined"
                            defaultValue={game.result[1]}
                            onChange={(e) =>
                              handleChange({
                                key: key as any,
                                index,
                                teamKey: 'away',
                                value: e.target.value
                              })
                            }
                            sx={{ minWidth: 50 }}
                            slotProps={{ htmlInput: { min: 0 } }}
                          />
                        </Box>
                        <Typography>{game.away}</Typography>
                      </Box>
                    </ListItem>
                  )
                })}
              </List>
            </Paper>
          )
        })}
      </Box>
      <ButtonGroup
        sx={{
          gap: 2,
          display: 'flex',
          maxWidth: {
            md: 'calc(50% - .5rem)'
          }
        }}
      >
        <Button
          sx={{ flex: 1 }}
          variant="contained"
          color="primary"
          type="submit"
        >
          Salvar Aposta
        </Button>
        <Button variant="contained" color="error" type="reset">
          Limpar Aposta
        </Button>
      </ButtonGroup>
    </Box>
  )
}
