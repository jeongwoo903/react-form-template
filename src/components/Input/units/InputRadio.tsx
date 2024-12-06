import * as React from 'react';
import { css } from '@emotion/react';

interface InputRadioProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function InputRadio({ ...rest }: InputRadioProps) {
  return <input type="radio" css={inputRadioCss} {...rest} />;
}

const inputRadioCss = css`
  margin: 0;
  cursor: pointer;
`;
