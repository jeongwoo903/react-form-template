import * as React from 'react';
import { css, Theme } from '@emotion/react';
import { Header } from 'components/Header/Header';
import Button from 'components/Button/Button';
import { useNavigate } from 'react-router-dom';
// import { useGetUserAPI } from 'apis/useGetUserAPI';
// import NotFound from 'pages/NotFound';
// import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinnter.tsx';
import { Modal } from 'components/Modal/Modal.tsx';
import { useState } from 'react';

export default function Home() {
  const navigate = useNavigate();
  // const { data: users, isLoading, error } = useGetUserAPI();
  //
  // if (isLoading) {
  //   return (
  //     <section css={layoutCss}>
  //       <LoadingSpinner />
  //     </section>
  //   );
  // }
  //
  // if (error) {
  //   return <NotFound {...error} />;
  // }
  const [isOpen, setIsOpen] = useState(true);

  return (
    <React.Fragment>
      <Header>
        <Header.Logo />
        <Header.Title>메인</Header.Title>
      </Header>
      <section css={layoutCss}>
        <Button type="button" role="link" onClick={() => navigate('/login')}>
          로그인 하기
        </Button>
      </section>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="모달 제목">
        <p>모달 내용 입니다.</p>
      </Modal>
    </React.Fragment>
  );
}

const layoutCss = (theme: Theme) => css`
  ${theme.layout.section}
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
