import {PropsWithChildren} from 'react';
import {GlobalPortal} from 'components/GlobalPortal/GlobalPortal.tsx';
import Button from 'components/Button/Button';
import {useModal} from 'hooks/useModal.ts';
import {css, Theme} from '@emotion/react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

export function Modal({isOpen, onClose, title, children}: PropsWithChildren<ModalProps>) {
  useModal({isOpen, onClose});

  const handleBackdropClick = (e: MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <GlobalPortal.Consumer>
      <div css={ModalBackdropCss} aria-hidden={!isOpen} onClick={() => handleBackdropClick}>
        <div css={ModalContentCss} role="dialog" aria-modal="true" aria-labelledby="modal-title">
          <div css={ModalDescCss}>
            <h2 id="modal-title">{title}</h2>
            <div>{children}</div>
          </div>
          <Button onClick={onClose}>닫기</Button>
        </div>
      </div>
    </GlobalPortal.Consumer>
  );
}

const ModalBackdropCss = css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
  transition: opacity 0.2s ease-in-out;

  &[aria-hidden='true'] {
    opacity: 0;
    pointer-events: none;
  }
`;

const ModalContentCss = css`
  background: white;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  min-width: 300px;
  max-width: 500px;
  transform: translateY(0);
  transition: transform 0.2s ease-in-out;
  gap: 16px;
  display: flex;
  flex-direction: column;

  [aria-hidden='true'] & {
    transform: translateY(-20px);
  }
`;

const ModalDescCss = (theme: Theme) => css`
  > #modal-title {
    ${theme.typography.title2};
  }

  display: flex;
  flex-direction: column;
  gap: 8px;
`;