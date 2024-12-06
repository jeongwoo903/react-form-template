import {Link} from 'react-router-dom';
import {css} from '@emotion/react';
import theme from 'styles/Theme';

export default function HeaderLogo() {
  return (
    <Link to={'/'}>
      <div
        css={css`
          ${theme.typography.body1}
          font-weight: 600;
          color: white;
        `}
      >
        로고
      </div>
    </Link>
  );
}
