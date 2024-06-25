import { env } from '@saas/env'

import { api } from './api-client'

interface SignUpRequest {
  name: string
  email: string
  password: string
}

type SignUpResponse = void

export async function signUp({
  name,
  email,
  password,
}: SignUpRequest): Promise<SignUpResponse> {
  console.log('entrei em signUp ao')
  console.log({
    name,
    email,
    password,
  })
  console.log('env.NEXT_PUBLIC_API_URL')
  console.log(env.NEXT_PUBLIC_API_URL)
  await api.post('users', {
    json: {
      name,
      email,
      password,
    },
  })
}
