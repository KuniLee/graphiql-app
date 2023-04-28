import React, { FC } from 'react';
import LoginForm from '@/modules/Authentication/components/LoginForm';

const Auth: FC = () => {
  return (
    <div className="flex my-4 align-items-center justify-content-center">
      <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
        <div className="text-center mb-5">
          <div className="text-900 text-3xl font-medium mb-3">Welcome Back</div>
          <span className="text-600 font-medium line-height-3">Don`t have an account?</span>
          <a className="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Create today!</a>
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default Auth;
