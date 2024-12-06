import {css, Theme} from '@emotion/react';
import {Input} from 'components/Input/Input';
import Button from 'components/Button/Button';
import {useSignupForm} from 'hooks/useSignupForm.ts';

export interface LabelProps {
  label: string;
}

export default function SignupForm() {
  const {
    userIDInput,
    passwordInput,
    inflowRadio,
    commuteSelect,
    mutation,
    handleSubmit,
    canSubmit
  } = useSignupForm();

  const inflowItems: LabelProps[] = [
    {label: 'sns'},
    {label: '검색'},
    {label: '배너'},
    {label: '온라인 광고'},
    {label: '오프라인 광고'},
    {label: '기타'},
  ];

  const commuteWay: LabelProps[] = [
    {label: '자전거'},
    {label: '지하철'},
    {label: '버스'},
    {label: '자동차'},
    {label: '도보'},
    {label: '기타'},
  ];

  return (
    <section css={layoutCss}>
      <form css={formCss} onSubmit={handleSubmit}>
        <Input title={'필수항목'} required={true}>
          <Input.Group>
            <Input.Label htmlFor={userIDInput.id} required={userIDInput.required}>
              아이디
            </Input.Label>
            <Input.Input
              id={userIDInput.id}
              name="userID"
              type="text"
              placeholder="아이디를 입력해주세요."
              value={userIDInput.value}
              onChange={userIDInput.onChange}
              disabled={mutation.isPending}
            />
            <Input.Message isValid={userIDInput.isValid}>
              아이디는 4-20자의 영문 소문자, 숫자만 사용 가능합니다.
            </Input.Message>
          </Input.Group>

          <Input.Group>
            <Input.Label htmlFor={passwordInput.id} required={userIDInput.required}>
              비밀번호
            </Input.Label>
            <Input.Input
              id={passwordInput.id}
              name="password"
              type="password"
              placeholder="비밀번호를 입력해주세요."
              value={passwordInput.value}
              onChange={passwordInput.onChange}
              disabled={mutation.isPending}
            />
            <Input.Message isValid={passwordInput.isValid}>
              비밀번호는 8-20자의 영문자, 숫자, 특수문자를 모두 포함해야 합니다.
            </Input.Message>
          </Input.Group>
        </Input>

        <Input title={'유입경로'} required={true}>
          <Input.Fieldset id={inflowRadio.id} column={4}>
            {inflowItems.map((item, index) => (
              <Input.Group key={index} isVertical={false}>
                <Input.Radio
                  id={`${inflowRadio.id}-${index}`}
                  name={inflowRadio.id}
                  value={item.label}
                  onChange={inflowRadio.onChange}
                  disabled={mutation.isPending}
                />
                <Input.Label htmlFor={`${inflowRadio.id}-${index}`}>{item.label}</Input.Label>
              </Input.Group>
            ))}
          </Input.Fieldset>
          <Input.Message isValid={inflowRadio.isValid}>유입경로를 선택해주세요.</Input.Message>
        </Input>

        <Input title={'출근 방식'}>
          <Input.Group>
            <Input.Label htmlFor={commuteSelect.id} required={commuteSelect.required}>
              출근 방식
            </Input.Label>
            <Input.Dropdown field={commuteSelect} list={commuteWay} placeholder={'출근 방식을 선택해주세요.'}/>
            <Input.Message isValid={commuteSelect.isValid}>출근방식을 선택해주세요.</Input.Message>
          </Input.Group>
        </Input>

        {mutation.isError && <div css={errorMessageCss}>{mutation.error.message}</div>}
        <Button type="submit" disabled={mutation.isPending || !canSubmit}>
          {mutation.isPending ? '처리중...' : '회원가입'}
        </Button>
      </form>
    </section>
  );
}

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

const errorMessageCss = css`
  color: #ff4444;
  font-size: 14px;
  text-align: center;
`;
