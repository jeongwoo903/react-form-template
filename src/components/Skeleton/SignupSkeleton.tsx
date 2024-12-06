import { css, Theme } from '@emotion/react';
import theme from 'styles/Theme';

export default function SignupSkeleton() {
  return (
    <section css={layoutCss}>
      <div css={formCss}>
        {/* 필수항목 */}
        <div css={sectionCss}>
          <div css={titleSkeletonCss} />
          {/* 아이디 */}
          <div css={inputGroupCss}>
            <div css={labelSkeletonCss} />
            <div css={inputSkeletonCss} />
            <div css={messageSkeletonCss} />
          </div>
          {/* 비밀번호 */}
          <div css={inputGroupCss}>
            <div css={labelSkeletonCss} />
            <div css={inputSkeletonCss} />
            <div css={messageSkeletonCss} />
          </div>
        </div>

        {/* 유입경로 */}
        <div css={sectionCss}>
          <div css={titleSkeletonCss} />
          <div css={radioGroupCss}>
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} css={radioItemCss}>
                <div css={radioSkeletonCss} />
                <div css={radioLabelSkeletonCss} />
              </div>
            ))}
          </div>
          <div css={messageSkeletonCss} />
        </div>

        {/* 출근 방식 */}
        <div css={sectionCss}>
          <div css={titleSkeletonCss} />
          <div css={inputGroupCss}>
            <div css={labelSkeletonCss} />
            <div css={selectSkeletonCss} />
            <div css={messageSkeletonCss} />
          </div>
        </div>

        {/* 버튼 */}
        <div css={buttonSkeletonCss} />
      </div>
    </section>
  );
}

const skeletonBase = (theme: Theme) => css`
  ${theme.animation.pulse}
  background-color: #e5e7eb;
  border-radius: 4px;
`;

const layoutCss = (theme: Theme) => css`
  ${theme.layout.section}
  overflow-y: scroll;
`;

const formCss = css`
  display: flex;
  flex-direction: column;
  gap: 24px 0;
  padding: 20px;
`;

const sectionCss = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const inputGroupCss = css`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const titleSkeletonCss = css`
  ${skeletonBase(theme)}
  height: 24px;
  width: 96px;
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

const messageSkeletonCss = css`
  ${skeletonBase(theme)}
  height: 16px;
  width: 75%;
`;

const radioGroupCss = css`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
`;

const radioItemCss = css`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const radioSkeletonCss = css`
  ${skeletonBase(theme)}
  height: 20px;
  width: 20px;
  border-radius: 50%;
`;

const radioLabelSkeletonCss = css`
  ${skeletonBase(theme)}
  height: 16px;
  width: 48px;
`;

const selectSkeletonCss = css`
  ${skeletonBase(theme)}
  height: 40px;
  width: 100%;
`;

const buttonSkeletonCss = css`
  ${skeletonBase(theme)}
  height: 48px;
  width: 100%;
`;
