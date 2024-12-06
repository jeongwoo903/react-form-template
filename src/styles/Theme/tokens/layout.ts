import { css } from '@emotion/react';

const VARS = {
  main_width: '375px',
  main_height: '600px',
  header_height: '60px',
};

const LAYOUT = Object.freeze({
  main: css`
    width: ${VARS.main_width};
    height: ${VARS.main_height};
  `,
  header: css`
    width: 100%;
    height: ${VARS.header_height};
    padding: 0 16px;
    background-color: #4180fa;
  `,
  section: css`
    height: calc(100% - ${VARS.header_height});
  `,
});

export default LAYOUT;
