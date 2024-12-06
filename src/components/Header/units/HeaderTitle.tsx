import * as React from 'react';
import { css } from '@emotion/react';

interface HeaderTitleProps {
  children?: React.ReactNode;
}

export default function HeaderTitle({ children }: HeaderTitleProps) {
  return (
    <div css={HeaderTitleCss}>
      <h3>{children}</h3>
    </div>
  );
}

const HeaderTitleCss = css`
  -webkit-user-drag: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  pointer-events: none;

  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  width: 100%;
  height: 60px;
  top: 0;
  left: 0;
  text-decoration: unset;

  > h3 {
    font-size: 18px;
    font-weight: 600;
    line-height: 135%;
    text-decoration: unset;
    color: white;
  }
`;
