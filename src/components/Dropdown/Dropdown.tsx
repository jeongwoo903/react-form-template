import * as React from 'react';
import DropdownButton from 'components/Dropdown/units/DropdownButton.tsx';
import DropdownList from 'components/Dropdown/units/DropdownList.tsx';
import {Field} from 'hooks/useField.ts';
import {LabelProps} from 'components/Form/SignupForm.tsx';
import {css} from '@emotion/react';

interface DropdownProps {
  field: Field<string>;
  list: LabelProps[];
  placeholder?: string;
}

const DEFAULT_PLACEHOLDER = '값을 선택해주세요.';

export default function Dropdown({field, list, placeholder = DEFAULT_PLACEHOLDER}: DropdownProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectItem, setSelectItem] = React.useState<string>('');

  return (
    <div css={DropdownCss}>
      <DropdownButton
        id={field.id}
        placeholder={placeholder}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        selectItem={selectItem}
      />
      <DropdownList
        list={list}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        selectItem={selectItem}
        setSelectItem={setSelectItem}
        onClick={field.onChange}
      />
    </div>
  );
}

const DropdownCss = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;
