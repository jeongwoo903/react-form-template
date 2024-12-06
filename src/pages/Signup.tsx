import * as React from 'react';
import { Suspense } from 'react';
import { Header } from 'components/Header/Header.tsx';
import { ErrorBoundary } from 'components/ErrorBoundary/ErrorBoundary.tsx';
import SignupSkeleton from 'components/Skeleton/SignupSkeleton.tsx';
import SignupForm from 'components/Form/SignupForm.tsx';

export default function Signup() {
  return (
    <React.Fragment>
      <Header>
        <Header.Back />
        <Header.Title>회원가입</Header.Title>
      </Header>
      <ErrorBoundary>
        <Suspense fallback={<SignupSkeleton />}>
          <SignupForm />
        </Suspense>
      </ErrorBoundary>
    </React.Fragment>
  );
}
