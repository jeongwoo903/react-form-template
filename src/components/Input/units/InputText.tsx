import * as React from 'react';
import { css } from '@emotion/react';
import { InputHTMLAttributes } from 'react';

interface InputElemProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode;
  required?: boolean;
}

export default function InputText({ children, required = false, ...rest }: InputElemProps) {
  return (
    <input css={InputElemCss} required={required} {...rest}>
      {children}
    </input>
  );
}

const InputElemCss = () => css`
  width: 100%;
  padding: 12px;
  background-color: #f1f1f1;
  border-radius: 8px;
  border: none;
`;
