import React, { FC, RefObject, useEffect, useId } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useSignIn } from '../firebase';
import { ERoutes } from '@/router';
import { useNavigate } from 'react-router-dom';
import { Toast } from 'primereact/toast';
import cx from 'classnames';
import { Password } from 'primereact/password';
import { EMAIL_PATTERN } from '../constants/patterns';

type LoginData = {
  email: string;
  password: string;
};

const LoginForm: FC<{ errToast: RefObject<Toast> }> = ({ errToast }) => {
  const navigate = useNavigate();
  const { t } = useTranslation(['auth', 'firebase']);
  const id = useId();

  const [signIn, , , error] = useSignIn();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({ mode: 'onBlur', defaultValues: { password: '123456' } });

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
      console.log(errors);
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
      <label htmlFor={'email' + id} className="block text-900 font-medium mb-2">
        {t('loginForm.email.label')}
      </label>
      <InputText
        defaultValue="test@mail.ru"
        {...register('email', {
          required: true,
          pattern: EMAIL_PATTERN,
        })}
        id={'email' + id}
        type="text"
        placeholder={t('loginForm.email.placeholder').toString()}
        className={cx('w-full mb-3', { 'p-invalid': errors.email })}
      />
      <Controller
        name="password"
        control={control}
        rules={{ required: true }}
        render={({ field, fieldState }) => (
          <>
            <label htmlFor="password" className="block text-900 font-medium mb-2">
              {t('loginForm.password.label')}
            </label>
            <Password
              defaultValue="123456"
              feedback={false}
              toggleMask
              id={field.name}
              {...field}
              inputRef={field.ref}
              inputClassName="w-full"
              placeholder={t('loginForm.password.placeholder').toString()}
              className={cx('w-full mb-3', { 'p-invalid': fieldState.error })}
            />
          </>
        )}
      />
      <Button label={t('loginForm.submitBtn').toString()} icon="pi pi-user" className="w-full" />
    </form>
  );
};

export default LoginForm;
