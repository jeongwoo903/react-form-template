import { css, Theme } from '@emotion/react';
import theme from 'styles/Theme';

export default function LoginSkeleton() {
  return (
    <form css={formCss}>
      <div css={inputContainerCss}>
        {/* 아이디 입력 그룹 */}
        <div css={inputGroupCss}>
          <div css={labelSkeletonCss} />
          <div css={inputSkeletonCss} />
        </div>

        {/* 비밀번호 입력 그룹 */}
        <div css={inputGroupCss}>
          <div css={labelSkeletonCss} />
          <div css={inputSkeletonCss} />
        </div>
      </div>

      {/* 버튼 그룹 */}
      <div css={buttonGroupCss}>
        <div css={buttonSkeletonCss} />
        <div css={buttonSkeletonCss} />
      </div>
    </form>
  );
}

const skeletonBase = (theme: Theme) => css`
  ${theme.animation.pulse}
  background-color: #e5e7eb;
  border-radius: 4px;
`;

const formCss = css`
  display: flex;
  flex-direction: column;
  gap: 24px 0;
  padding: 20px;
`;

const inputContainerCss = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const inputGroupCss = css`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const labelSkeletonCss = css`
  ${skeletonBase(theme)}
  height: 16px;
  width: 64px;
`;

const inputSkeletonCss = css`
  ${skeletonBase(theme)}
  height: 40px;
  width: 100%;
`;

const buttonGroupCss = css`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const buttonSkeletonCss = css`
  ${skeletonBase(theme)}
  height: 48px;
  width: 100%;
`;
