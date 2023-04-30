import React, { FC, RefObject, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useSignIn } from '../firebase';
import { ERoutes } from '@/router';
import { useNavigate } from 'react-router-dom';
import { Toast } from 'primereact/toast';
import cx from 'classnames';

type LoginData = {
  email: string;
  password: string;
};

const LoginForm: FC<{ errToast: RefObject<Toast> }> = ({ errToast }) => {
  const navigate = useNavigate();
  const { t } = useTranslation(['auth', 'firebase']);

  const [signIn, , , error] = useSignIn();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({ mode: 'onBlur' });

  useEffect(() => {
    if (error)
      errToast.current?.replace({
        sticky: true,
        severity: 'error',
        summary: t('ErrorTitle.login', { ns: 'firebase' }),
        detail: t(error.code, { ns: 'firebase' }),
      });
  }, [errToast, error, t]);

  const onSubmit = handleSubmit(
    async (data) => {
      const result = await signIn(data.email, data.password);

      if (result?.user) navigate('../' + ERoutes.Main);
    },
    (errors) => {
      errToast.current?.replace(
        Object.entries(errors).map(([field, { type }]) => ({
          severity: 'error',
          life: 3000,
          detail: t(`loginForm.${field}.error.${type}`),
        }))
      );
    }
  );

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="email" className="block text-900 font-medium mb-2">
        {t('loginForm.email.label')}
      </label>
      <InputText
        defaultValue="test@mail.ru"
        {...register('email', {
          required: true,
          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        })}
        id="email"
        type="text"
        placeholder={t('loginForm.email.placeholder').toString()}
        className={cx('w-full mb-3', { 'p-invalid': errors.email })}
      />

      <label htmlFor="password" className="block text-900 font-medium mb-2">
        {t('loginForm.password.label')}
      </label>
      <InputText
        defaultValue="123456"
        {...register('password', { required: true })}
        id="password"
        type="password"
        placeholder={t('loginForm.password.placeholder').toString()}
        className={cx('w-full mb-3', { 'p-invalid': errors.password })}
      />
      <Button label={t('loginForm.submitBtn').toString()} icon="pi pi-user" className="w-full" />
    </form>
  );
};

export default LoginForm;
