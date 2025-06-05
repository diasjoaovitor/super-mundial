import * as yup from 'yup'

export const schema = yup.object({
  name: yup.string().required('Nome é obrigatório'),
  email: yup.string().email('Email inválido').required('Email é obrigatório'),
  phone: yup.string().required('Telefone é obrigatório')
})

export type TContactFormData = yup.InferType<typeof schema>
