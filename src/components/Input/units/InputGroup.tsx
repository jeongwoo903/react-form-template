import * as React from 'react';
import {css} from '@emotion/react';

interface InputGroupProps {
  children: React.ReactNode;
  isVertical?: boolean;
}

export default function InputGroup({children, isVertical = true}: InputGroupProps) {
  return <div css={InputGroupCss(isVertical)}>{children}</div>;
}

const InputGroupCss = (isVertical: boolean) => css`
  display: flex;
  flex-direction: ${isVertical ? 'column' : 'row'};
  gap: 8px;
`;
