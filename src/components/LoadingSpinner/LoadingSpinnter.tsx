import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

interface LoadingSpinnerProps {
  size?: number;
  color?: string;
}

export default function LoadingSpinner({ size = 40, color = '#0066ff' }: LoadingSpinnerProps) {
  return (
    <SpinnerWrapper size={size}>
      <Spinner color={color} />
    </SpinnerWrapper>
  );
}

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const SpinnerWrapper = styled.div<LoadingSpinnerProps>`
  display: inline-block;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
`;

const Spinner = styled.div<LoadingSpinnerProps>`
  width: 100%;
  height: 100%;
  border: 3px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top-color: ${props => props.color};
  animation: ${spin} 0.8s linear infinite;
`;
