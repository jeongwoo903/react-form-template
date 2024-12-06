import * as React from 'react';
import { css, Theme } from '@emotion/react';
import { Header } from 'components/Header/Header.tsx';
import ErrorIcon from 'assets/svg/error-icon.svg?react';
import Button from 'components/Button/Button.tsx';
import { useNavigate } from 'react-router-dom';

export default function NotFound(error: Error) {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <Header>
        <Header.Logo />
        <Header.Title>404 Error</Header.Title>
      </Header>
      <section css={layoutCss}>
        <div css={titleCss}>
          <ErrorIcon />
          <h6>죄송합니다. 경로를 찾을 수 없습니다.</h6>
          <h6>{error.message}</h6>
        </div>
        <Button type="button" role="link" onClick={() => navigate('/')}>
          홈으로
        </Button>
      </section>
    </React.Fragment>
  );
}

const layoutCss = (theme: Theme) => css`
  ${theme.layout.section}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const titleCss = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  > h6 {
    ${theme.typography.body3}
  }
`;
