import {useMutation, UseMutationResult} from '@tanstack/react-query';
import {useNavigate} from 'react-router-dom';
import {useForm} from 'hooks/useForm.ts';
import {Field, useField} from 'hooks/useField.ts';
import * as React from 'react';
import {useId} from 'react';
import {loginUser} from 'apis/login.ts';
import {Login} from 'types/auth';

interface UseLoginFormReturn {
  userIDInput: Field<string>;
  passwordInput: Field<string>;
  mutation: UseMutationResult<Login, Error, Login>;
  handleSubmit: (e: React.FormEvent) => void;
  canSubmit: boolean;
}

export const useLoginForm = (): UseLoginFormReturn => {
  const navigate = useNavigate();

  const userIDInput = useField<string>({
    id: useId(),
    initValue: '',
    // validation: { type: 'userID', required: true },
  });

  const passwordInput = useField<string>({
    id: useId(),
    initValue: '',
    // validation: { type: 'password', required: true },
  });

  const mutation = useMutation({
    mutationFn: loginUser,
    onSuccess: () => {
      navigate('/', {replace: true});
    },
    onError: () => {
      navigate('/login');
    },
  });

  const form = useForm({
    fields: {
      userID: userIDInput,
      password: passwordInput,
    },
    mutation: mutation,
  });

  return {
    userIDInput,
    passwordInput,
    mutation,
    handleSubmit: form.handleSubmit,
    canSubmit: form.canSubmit,
  };
};
