import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Message } from 'primereact/message';
import { ERoutes } from '@/router';
import { useNavigate } from 'react-router-dom';
import { useCreateUser } from '../firebase';

type RegisterData = {
  email: string;
  password: string;
};

const RegisterForm = () => {
  const navigate = useNavigate();
  const { t } = useTranslation(['auth', 'firebase']);

  const [createUser, , , error] = useCreateUser();

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<RegisterData>();

  const onSubmit = handleSubmit(async (data) => {
    const result = await createUser(data.email, data.password);

    if (result?.user) navigate('../' + ERoutes.Main);
  });

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="email" className="block text-900 font-medium mb-2">
        {t('regForm.email.label')}
      </label>
      <InputText
        {...register('email')}
        id="email"
        type="text"
        placeholder={t('regForm.email.placeholder').toString()}
        className="w-full mb-3"
      />

      <label htmlFor="password" className="block text-900 font-medium mb-2">
        {t('regForm.password.label')}
      </label>
      <InputText
        {...register('password')}
        id="password"
        type="password"
        placeholder={t('regForm.password.placeholder').toString()}
        className="w-full mb-3"
      />
      <Button label={t('regForm.submitBtn').toString()} icon="pi pi-user-plus" className="w-full" />
      {error && <Message severity="error" text={t(error.code, { ns: 'firebase' })} className="w-full my-1" />}
    </form>
  );
};

export default RegisterForm;
