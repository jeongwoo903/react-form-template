import {Component, PropsWithChildren, ReactNode} from 'react';
import {css, Theme} from '@emotion/react';
import ErrorIcon from 'assets/svg/error-icon.svg?react';
import Button from 'components/Button/Button.tsx';

interface ErrorBoundaryProps {
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  errorMsg: string | null;
}

/**
 * React 공식 가이드 수정
 * https://ko.legacy.reactjs.org/docs/error-boundaries.html
 */
export class ErrorBoundary extends Component<PropsWithChildren<ErrorBoundaryProps>, ErrorBoundaryState> {
  state: ErrorBoundaryState = {
    hasError: false,
    errorMsg: null,
  };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {hasError: true, errorMsg: error.message};
  }

  componentDidCatch(error: Error) {
    console.error('Uncaught error:', error.message);
  }

  render() {
    const {hasError, errorMsg} = this.state;
    const {fallback, children} = this.props;

    if (hasError) {
      if (fallback) {
        return fallback;
      }

      return (
        <section css={layoutCss}>
          <div css={titleCss}>
            <ErrorIcon/>
            <h6>에러가 발생했습니다!</h6>
            <h6>error : {errorMsg}</h6>
          </div>
          <Button
            type="button"
            role="link"
            onClick={() => {
              window.location.href = '/';
            }}
          >
            홈으로
          </Button>
        </section>
      );
    }

    return children;
  }
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
