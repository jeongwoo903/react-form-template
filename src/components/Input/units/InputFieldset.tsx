import * as React from 'react';
import { css } from '@emotion/react';
import { FieldsetHTMLAttributes } from 'react';

interface InputFieldsetProps extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
  children: React.ReactNode;
  column: number;
}

export default function InputFieldset({ children, column }: InputFieldsetProps) {
  return <fieldset css={InputFieldsetCss(column)}>{children}</fieldset>;
}

const InputFieldsetCss = (column: number) => css`
  display: grid;
  grid-template-columns: repeat(${column}, 1fr);
  justify-items: start;
  gap: 16px 0;
  width: 100%;
  padding: 0;
`;
