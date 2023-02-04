import React, { useState } from 'react';
import * as S from './SignForm.style';
import Input from '@components/common/Input/Input';
import Button from '@components/common/Button/Button';
import authValidate from '@utils/validate/authValidate';
import useAuth from '@hooks/auth/useAuth';

const SignForm = ({ type }: { type: 'signIn' | 'signUp' }) => {
  const [validate, setValidate] = useState({ email: false, password: false });
  const [userInput, setUserInput] = useState({ email: '', password: '' });
  const auth = useAuth();
  const onChange = (e: any) => {
    const name = e.target.name as 'email' | 'password';
    setUserInput({ ...userInput, [name]: e.target.value });
    setValidate({
      ...validate,
      [name]: authValidate[name](e.target.value),
    });
  };

  const isDisabled = () => {
    return !(validate.email && validate.password);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    auth[type](userInput);
  };
  const title = type.replace('s', 'S');
  return (
    <S.container>
      <S.form onChange={onChange} onSubmit={onSubmit}>
        <S.title>{title}</S.title>
        <S.label>
          <p>이메일</p>
          <Input
            data-testid='email-input'
            placeholder='email'
            type='text'
            name='email'
            isValid={validate.email}
          />
        </S.label>
        <S.label>
          <p>비밀번호</p>
          <Input
            data-testid='password-input'
            placeholder='password'
            type='password'
            name='password'
            isValid={validate.password}
          />
        </S.label>
        <br />
        <Button
          data-testid={type === 'signIn' ? 'signin-button' : 'signup-button'}
          color={isDisabled() ? 'disable' : 'success'}
          disabled={isDisabled()}
        >
          {title.replace(/(.{4})/g, '$1 ')}
        </Button>
      </S.form>
    </S.container>
  );
};

export default SignForm;
