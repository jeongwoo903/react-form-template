import * as React from 'react';
import { LabelHTMLAttributes } from 'react';
import { css, Theme } from '@emotion/react';
import InputGroup from 'components/Input/units/InputGroup.tsx';
import InputText from 'components/Input/units/InputText.tsx';
import InputRadio from 'components/Input/units/InputRadio.tsx';
import InputFieldset from 'components/Input/units/InputFieldset.tsx';
import InputMessage from 'components/Input/units/InputMessage.tsx';
import Dropdown from 'components/Dropdown/Dropdown.tsx';
import Label from 'components/Label/Label.tsx';
import theme from 'styles/Theme';

interface InputMainProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children?: React.ReactNode;
  title?: string;
  isVertical?: boolean;
  required?: boolean;
}

export default function InputMain({ children, title, isVertical = true, required = false }: InputMainProps) {
  return (
    <div css={InputMainCss(isVertical)}>
      {title && <h6 css={InputTitleCss(required, theme)}>{title}</h6>}
      {children}
    </div>
  );
}

const InputMainCss = (isVertical: boolean) => css`
  display: flex;
  flex-direction: ${isVertical ? 'column' : 'row'};
  gap: 16px;
  width: 100%;
`;

const InputTitleCss = (required: boolean, theme: Theme) => css`
  ${theme.typography.body3}
  align-content: center;
  padding-bottom: 4px;
  border-bottom: 1px solid #a1a1a1a1;

  &:after {
    content: ${required ? '" *"' : ''};
    color: ${theme.color.error};
  }
`;

export const Input = Object.assign(InputMain, {
  Group: InputGroup,
  Input: InputText,
  Label: Label,
  Fieldset: InputFieldset,
  Radio: InputRadio,
  Message: InputMessage,
  Dropdown: Dropdown,
});
