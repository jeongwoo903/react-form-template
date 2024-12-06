import * as React from 'react';
import { css, Theme } from '@emotion/react';

interface InputMessageProps {
  isValid: boolean;
  children: React.ReactNode;
}

export default function InputMessage({ isValid, children }: InputMessageProps) {
  if (!isValid) {
    return <div css={messageCss}>{children}</div>;
  }
}

const messageCss = (theme: Theme) => css`
  ${theme.typography.caption1};
  color: ${theme.color.error};
`;
