import * as React from 'react';
import { css, Theme } from '@emotion/react';
import HeaderLogo from 'components/Header/units/HeaderLogo.tsx';
import HeaderTitle from 'components/Header/units/HeaderTitle.tsx';
import HeaderClose from 'components/Header/units/HeaderClose.tsx';
import HeaderBack from 'components/Header/units/HeaderBack.tsx';
import { LabelHTMLAttributes } from 'react';

interface HeaderMainProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children?: React.ReactNode;
}

function HeaderMain({ children }: HeaderMainProps) {
  return <header css={HeaderMainCss}>{children}</header>;
}

const HeaderMainCss = (theme: Theme) => css`
  ${theme.layout.header}
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const Header = Object.assign(HeaderMain, {
  Logo: HeaderLogo,
  Title: HeaderTitle,
  Close: HeaderClose,
  Back: HeaderBack,
});
