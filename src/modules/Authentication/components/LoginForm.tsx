import React from 'react'
import { useForm } from 'react-hook-form'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { login } from '@/modules/Authentication/store/authSlice'
import { Message } from 'primereact/message'

type LoginData = {
  email: string
  password: string
}

const LoginForm = () => {
  const dispatch = useAppDispatch()
  const { error } = useAppSelector((state) => state.auth)

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<LoginData>()

  const onSubmit = handleSubmit(async (data) => {
    dispatch(login(data))
  })

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="email" className="block text-900 font-medium mb-2">
        Email
      </label>
      <InputText {...register('email')} id="email" type="text" placeholder="Email address" className="w-full mb-3" />

      <label htmlFor="password" className="block text-900 font-medium mb-2">
        Password
      </label>
      <InputText
        {...register('password')}
        id="password"
        type="password"
        placeholder="Password"
        className="w-full mb-3"
      />

      <div className="flex align-items-center justify-content-between mb-6">
        <a className="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Forgot your password?</a>
      </div>
      {error && <Message severity="error" text={error} className="w-full my-1" />}
      <Button label="Sign In" icon="pi pi-user" className="w-full" />
    </form>
  )
}

export default LoginForm
