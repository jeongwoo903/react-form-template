// import { scan } from 'react-scan';
import { css, Theme } from '@emotion/react';
import { Outlet } from 'react-router-dom';

// /** 개발용 react-scan 세팅 */
// if (typeof window !== 'undefined') {
//   scan({
//     enabled: true,
//     log: true, // logs render info to console (default: false)
//   });
// }

export default function Layout() {
  return (
    <section css={mainCss}>
      <main css={mainContentCss}>
        <Outlet />
      </main>
    </section>
  );
}

const mainCss = () => css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100dvh;
  background-color: #222222;
`;

const mainContentCss = (theme: Theme) => css`
  ${theme.layout.main}
  background-color: white;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  overflow: scroll;
`;
