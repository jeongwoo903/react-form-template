import {useMutation, UseMutationResult} from '@tanstack/react-query';
import {useNavigate} from 'react-router-dom';
import {useForm} from 'hooks/useForm.ts';
import {Field, useField} from 'hooks/useField.ts';
import * as React from 'react';
import {useId} from 'react';
import {signupUser} from 'apis/signup.ts';
import {Signup} from 'types/auth';

interface UseSignupFormReturn {
  userIDInput: Field<string>;
  passwordInput: Field<string>;
  inflowRadio: Field<string>;
  commuteSelect: Field<string>;
  mutation: UseMutationResult<Signup, Error, Signup>;
  handleSubmit: (e: React.FormEvent) => void;
  canSubmit: boolean;
}

export const useSignupForm = (): UseSignupFormReturn => {
  const navigate = useNavigate();

  const userIDInput = useField<string>({
    id: useId(),
    initValue: '',
    validation: {type: 'userID'},
    required: true,
  });

  const passwordInput = useField<string>({
    id: useId(),
    initValue: '',
    validation: {type: 'password'},
    required: true,
  });

  const inflowRadio = useField<string>({
    id: useId(),
    initValue: '',
    validation: {type: 'empty'},
    required: true,
  });

  const commuteSelect = useField<string>({
    id: useId(),
    initValue: '',
  });

  const mutation = useMutation({
    mutationFn: signupUser,
    onSuccess: () => {
      navigate('/');
    },
    onError: () => {
      navigate('/signup');
    },
  });

  const form = useForm({
    fields: {
      userID: userIDInput,
      password: passwordInput,
      inflow: inflowRadio,
      commute: commuteSelect,
    },
    mutation: mutation,
  });

  return {
    userIDInput,
    passwordInput,
    inflowRadio,
    commuteSelect,
    mutation,
    handleSubmit: form.handleSubmit,
    canSubmit: form.canSubmit,
  };
};
