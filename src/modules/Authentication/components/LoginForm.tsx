import React from 'react'
import { useForm } from 'react-hook-form'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
import { Message } from 'primereact/message'
import { useSignIn } from '@/modules/Authentication'
import { ERoutes } from '@/router'
import { useNavigate } from 'react-router-dom'

type LoginData = {
  email: string
  password: string
}

const LoginForm = () => {
  const navigate = useNavigate()

  const [signIn, user, loading, error] = useSignIn()

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<LoginData>()

  const onSubmit = handleSubmit(async (data) => {
    const result = await signIn(data.email, data.password)

    if (result?.user) navigate('../' + ERoutes.Main)
  })

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="email" className="block text-900 font-medium mb-2">
        Email
      </label>
      <InputText
        defaultValue="test@mail.ru"
        {...register('email')}
        id="email"
        type="text"
        placeholder="Email address"
        className="w-full mb-3"
      />

      <label htmlFor="password" className="block text-900 font-medium mb-2">
        Password
      </label>
      <InputText
        defaultValue="123456"
        {...register('password')}
        id="password"
        type="password"
        placeholder="Password"
        className="w-full mb-3"
      />

      <div className="flex align-items-center justify-content-between mb-6">
        <a className="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Forgot your password?</a>
      </div>
      {error && <Message severity="error" text={error.message} className="w-full my-1" />}
      <Button label="Sign In" icon="pi pi-user" className="w-full" />
    </form>
  )
}

export default LoginForm
