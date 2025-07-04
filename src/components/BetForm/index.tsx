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

import { TData3 } from '@/constants'
import { TBetChangeParams } from '@/hooks'

import * as S from './style'

export type TBetFormProps = {
  bets: TData3
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
        {Object.entries(bets).map(([group, games]) => {
          return (
            <Paper key={group} sx={{ mb: 2 }}>
              <ListSubheader sx={{ bgcolor: 'warning.light', color: 'black' }}>
                {group}
              </ListSubheader>
              <List>
                {games.map((game, index) => {
                  return (
                    <ListItem key={index} sx={{ flexDirection: 'column' }}>
                      <Box
                        sx={{
                          ...S.Grid,
                          gridTemplateColumns: '1fr auto 1fr',
                          gap: 2,
                          mb: 1
                        }}
                      >
                        <Typography
                          variant="caption"
                          color="textSecondary"
                          textAlign="right"
                        >
                          {game.date}
                        </Typography>
                        <Typography variant="caption" color="textSecondary">
                          {game.time}
                        </Typography>
                        <Typography variant="caption" color="textSecondary">
                          {game.local}
                        </Typography>
                      </Box>
                      <Box sx={S.Grid}>
                        <Typography sx={{ textAlign: 'right' }}>
                          {game.home}
                        </Typography>
                        <Box
                          sx={{ ...S.Grid, textAlign: 'center', mx: 2, gap: 2 }}
                        >
                          <TextField
                            type="number"
                            variant="outlined"
                            defaultValue={game.result[0]}
                            onChange={(e) =>
                              handleChange({
                                group: group as any,
                                index,
                                key: 'home',
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
                                group: group as any,
                                index,
                                key: 'away',
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
