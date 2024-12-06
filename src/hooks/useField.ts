import {ChangeEvent, MouseEvent, useState} from 'react';
import {validator, ValidatorProps} from 'utils/validator';

type FieldEvent = ChangeEvent<HTMLInputElement> | MouseEvent<HTMLElement>;

export interface UseFieldProps<T> {
  id: string;
  initValue: T;
  validation?: Omit<ValidatorProps<T>, 'value'>;
  required?: boolean;
}

export interface Field<T> {
  id: string;
  value: T;
  onChange: (event: FieldEvent) => void;
  isValid: boolean;
  validate: () => boolean;
  required: boolean;
}

export function useField<T>({
                              id,
                              initValue,
                              validation,
                              required = false
                            }: UseFieldProps<T>): Field<T> {
  const [value, setValue] = useState<T>(initValue);
  const [isValid, setIsValid] = useState<boolean>(true);

  const validateValue = (valueToValidate: T): boolean => {
    if (!validation) {
      return true;
    }

    return validator({
      value: valueToValidate,
      ...validation,
    });
  };

  /** 타입 유연성을 지키기 위해 타입 단언 사용 */
  const onChange = (event: FieldEvent) => {
    const target = event.target;

    if (!(target instanceof HTMLElement)) {
      return;
    }

    const newValue = target instanceof HTMLInputElement ? target.value : target.getAttribute('value');

    setValue(newValue as T);
    setIsValid(validateValue(newValue as T));
  };

  const validate = (): boolean => {
    const validationResult = validateValue(value);
    setIsValid(validationResult);
    return validationResult;
  };

  return {
    id,
    value,
    onChange,
    isValid,
    validate,
    required,
  };
}
