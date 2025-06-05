import { yupResolver } from '@hookform/resolvers/yup'
import { Button, FormControl, TextField } from '@mui/material'
import { useEffect, useMemo } from 'react'
import { Controller, useForm } from 'react-hook-form'

import { Modal } from '@/components'
import { phoneMask } from '@/utils'

import { schema, TContactFormData } from './schema'

export type TContactFormProps = {
  data: TContactFormData | null
  isOpened: boolean
  handleClose: () => void
  onSubmit: (data: TContactFormData) => void
}

export const ContactForm = ({
  data,
  isOpened,
  handleClose,
  onSubmit
}: TContactFormProps) => {
  const defaultValues: TContactFormData = useMemo(
    () => ({
      name: data?.name ?? '',
      email: data?.email ?? '',
      phone: data?.phone ?? ''
    }),
    [data]
  )

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    control
  } = useForm<TContactFormData>({
    resolver: yupResolver(schema) as any,
    defaultValues
  })

  useEffect(() => {
    reset(defaultValues)
  }, [defaultValues, reset])

  return (
    <Modal
      title="Preencha suas informações de contato"
      isOpened={isOpened}
      handleClose={handleClose}
      sx={{ maxWidth: '500px' }}
    >
      <FormControl
        component="form"
        role="form"
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        fullWidth
      >
        <TextField
          {...register('name')}
          type="text"
          label="Nome"
          defaultValue={data?.name}
          error={!!errors.name}
          helperText={errors.name?.message}
          sx={{ mb: 2 }}
        />
        <TextField
          {...register('email')}
          type="email"
          label="Email"
          placeholder="Insira seu email para receber o PDF"
          defaultValue={data?.email}
          error={!!errors.email}
          helperText={errors.email?.message}
          sx={{ mb: 2 }}
        />
        <Controller
          name="phone"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Telefone"
              placeholder="(00) 00000-0000"
              value={phoneMask(field.value)}
              error={!!errors.phone}
              helperText={errors.phone?.message}
              sx={{ mb: 2 }}
            />
          )}
        />
        <Button type="submit" variant="contained">
          Enviar Aposta
        </Button>
      </FormControl>
    </Modal>
  )
}
