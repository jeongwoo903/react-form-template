import * as React from 'react';
import { Suspense } from 'react';
import { Header } from 'components/Header/Header.tsx';
import LoginForm from 'components/Form/LoginForm.tsx';
import LoginSkeleton from 'components/Skeleton/LoginSkeleton.tsx';
import { ErrorBoundary } from 'components/ErrorBoundary/ErrorBoundary.tsx';

export default function Login() {
  return (
    <React.Fragment>
      <Header>
        <Header.Logo />
        <Header.Title>로그인</Header.Title>
      </Header>
      <ErrorBoundary>
        <Suspense fallback={<LoginSkeleton />}>
          <LoginForm />
        </Suspense>
      </ErrorBoundary>
    </React.Fragment>
  );
}
