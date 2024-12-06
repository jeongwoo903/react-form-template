import { css } from '@emotion/react';

const ANIMATION = {
  pulse: css`
    @keyframes pulse {
      0%,
      100% {
        opacity: 1;
      }
      50% {
        opacity: 0.5;
      }
    }
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  `,
};

export default ANIMATION;
