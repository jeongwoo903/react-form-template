import React from 'react';
import {Field} from 'hooks/useField.ts';
import {UseMutationResult} from '@tanstack/react-query';

type FormField<T> = {
  [K in keyof T]: Field<T[K]>;
};

interface FormReturn<T, U> {
  formFields: FormField<T>;
  currentValues: U;
  canSubmit: boolean;
  validateAll: () => boolean;
  handleSubmit: (event: React.FormEvent) => void;
}

interface UseFormProps<T, U> {
  fields: FormField<T>;
  mutation: UseMutationResult<U, Error, U>;
}

export function useForm<T, U>({fields, mutation}: UseFormProps<T, U>): FormReturn<T, U> {
  /** 타입 유연성을 지키기 위해 타입 단언 사용 */
  const fieldKeys = Object.keys(fields) as Array<keyof T>;

  const formFields: FormField<T> = {...fields};

  const currentValues = Object.fromEntries(fieldKeys.map(key => [key, formFields[key].value])) as U;

  const validateAll = (): boolean => {
    return fieldKeys.reduce((isValid, key) => {
      return fields[key].validate() && isValid;
    }, true);
  };

  const canSubmit = fieldKeys.every(key => formFields[key].isValid);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (validateAll()) {
      mutation.mutate(currentValues);
    }
  };

  return {
    formFields,
    currentValues,
    canSubmit,
    validateAll,
    handleSubmit,
  };
}
