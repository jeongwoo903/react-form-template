import * as React from 'react';
import {LabelHTMLAttributes} from 'react';
import {css, Theme} from '@emotion/react';
import theme from 'styles/Theme';

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
  required?: boolean;
}

export default function Label({children, required = false, ...rest}: LabelProps) {
  return (
    <label css={InputLabelCss(required, theme)} {...rest}>
      {children}
    </label>
  );
}

const InputLabelCss = (required: boolean, theme: Theme) => css`
  ${theme.typography.caption1}
  align-content: center;
  cursor: pointer;

  &:after {
    content: ${required ? '" *"' : ''};
    color: ${theme.color.error};
  }
`;
