import * as React from 'react';
import theme from 'styles/Theme';
import { css, Theme } from '@emotion/react';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  disabled?: boolean;
}

export default function Button({ children, disabled = false, ...rest }: ButtonProps) {
  return (
    <button css={buttonCss(disabled, theme)} {...rest}>
      {children}
    </button>
  );
}

const buttonCss = (disabled: boolean, theme: Theme) => css`
  ${theme.typography.title3}
  padding: 8px 10px;
  border-radius: 8px;
  color: white;
  background-color: ${disabled ? '#888' : theme.color.primary};

  &:hover {
    filter: brightness(90%);
  }
`;
