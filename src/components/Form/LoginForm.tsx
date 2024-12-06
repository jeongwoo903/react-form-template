import {css} from '@emotion/react';
import {Input} from 'components/Input/Input';
import Button from 'components/Button/Button';
import {useLoginForm} from 'hooks/useLoginForm.ts';
import {useNavigate} from 'react-router-dom';

export default function LoginForm() {
  const {userIDInput, passwordInput, mutation, handleSubmit, canSubmit} = useLoginForm();
  const navigate = useNavigate();

  return (
    <form css={formCss} onSubmit={handleSubmit}>
      <Input>
        <Input.Group>
          <Input.Label htmlFor={userIDInput.id}>아이디</Input.Label>
          <Input.Input
            id={userIDInput.id}
            name="userID"
            type="text"
            placeholder="아이디를 입력해주세요."
            value={userIDInput.value}
            onChange={userIDInput.onChange}
            disabled={mutation.isPending}
          />
        </Input.Group>

        <Input.Group>
          <Input.Label htmlFor={passwordInput.id}>비밀번호</Input.Label>
          <Input.Input
            id={passwordInput.id}
            name="password"
            type="password"
            placeholder="비밀번호를 입력해주세요."
            value={passwordInput.value}
            onChange={passwordInput.onChange}
            disabled={mutation.isPending}
          />
        </Input.Group>
      </Input>

      {mutation.isError && <div css={errorMessageCss}>{mutation.error.message}</div>}

      <Button type="submit" disabled={mutation.isPending || !canSubmit}>
        {mutation.isPending ? '처리중...' : '로그인'}
      </Button>
      <Button type="button" role="link" onClick={() => navigate('/signup')}>
        회원가입
      </Button>
    </form>
  );
}

const formCss = css`
  display: flex;
  flex-direction: column;
  gap: 24px 0;
  padding: 20px;
`;

const errorMessageCss = css`
  color: #ff4444;
  font-size: 14px;
  text-align: center;
`;
