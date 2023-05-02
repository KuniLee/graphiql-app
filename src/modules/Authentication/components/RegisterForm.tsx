import { FC, RefObject, useEffect, useRef } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import { useCreateUser } from '../firebase';
import { Toast } from 'primereact/toast';
import cx from 'classnames';
import { Password } from 'primereact/password';
import { Divider } from 'primereact/divider';
import { ERoutes } from '@/router';
import ReCAPTCHA from 'react-google-recaptcha';

type RegisterData = {
  email: string;
  password: string;
};

const RegisterForm: FC<{ errToast: RefObject<Toast> }> = ({ errToast }) => {
  const navigate = useNavigate();
  const { t } = useTranslation(['auth', 'firebase']);

  const [createUser, , , error] = useCreateUser();

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterData>({ mode: 'onBlur' });

  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const footer = (
    <>
      <Divider />
      <p className="mt-2"> {t('regForm.password.suggestions.title')}</p>
      <ul className="pl-2 ml-2 mt-0 line-height-3">
        {t('regForm.password.suggestions.text')
          .toString()
          .split('//')
          .map((el, idx) => (
            <li key={idx}>{el}</li>
          ))}
      </ul>
    </>
  );

  useEffect(() => {
    if (error)
      errToast.current?.replace({
        sticky: true,
        severity: 'error',
        summary: t('ErrorTitle.registration', { ns: 'firebase' }),
        detail: t(error.code, { ns: 'firebase' }),
      });
  }, [errToast, error, t]);

  const onSubmit = handleSubmit(
    async (data) => {
      try {
        const token = await recaptchaRef?.current?.executeAsync();

        if (token) {
          recaptchaRef?.current?.reset();
          const result = await createUser(data.email, data.password);

          if (result?.user) navigate('../' + ERoutes.Main);
        } else throw new Error('No reCAPTCHA token');
      } catch (error) {
        console.error(error);
      }
    },
    (errors) => {
      errToast.current?.replace(
        Object.entries(errors).map(([field, { type }]) => ({
          severity: 'error',
          life: 3000,
          detail: t(`regForm.${field}.error.${type}`),
        }))
      );
    }
  );

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="email" className="block text-900 font-medium mb-2">
        {t('regForm.email.label')}
      </label>
      <InputText
        {...register('email', {
          required: true,
          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        })}
        id="email"
        type="text"
        placeholder={t('regForm.email.placeholder').toString()}
        className={cx('w-full mb-3', { 'p-invalid': errors.email })}
      />
      <Controller
        name="password"
        control={control}
        rules={{
          required: true,
          maxLength: 12,
          minLength: 6,
        }}
        render={({ field, fieldState }) => (
          <>
            <label htmlFor="password" className="block text-900 font-medium mb-2">
              {t('regForm.password.label')}
            </label>
            <Password
              promptLabel={t('regForm.password.promptLabel').toString()}
              toggleMask
              id={field.name}
              {...field}
              inputRef={field.ref}
              footer={footer}
              inputClassName="w-full"
              placeholder={t('regForm.password.placeholder').toString()}
              className={cx('w-full mb-3', { 'p-invalid': fieldState.error })}
            />
          </>
        )}
      />
      <ReCAPTCHA ref={recaptchaRef} size="invisible" sitekey={import.meta.env.VITE_RECAPTCHA_SITEKEY} />
      <Button label={t('regForm.submitBtn').toString()} icon="pi pi-user-plus" className="w-full" />
    </form>
  );
};

export default RegisterForm;
