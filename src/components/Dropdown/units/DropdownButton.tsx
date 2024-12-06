import * as React from 'react';
import {SelectHTMLAttributes} from 'react';
import {css, Theme} from '@emotion/react';
import DropdownIcon from 'assets/svg/dropdown-icon.svg?react';
import theme from 'styles/Theme';

interface DropdownButtonProps extends SelectHTMLAttributes<HTMLSelectElement> {
  id: string;
  placeholder: string;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectItem: string;
}

/** select 이용 시, safari 에러로 인한 div 사용*/
export default function DropdownButton({
                                         id,
                                         placeholder,
                                         isOpen,
                                         setIsOpen,
                                         selectItem
                                       }: DropdownButtonProps) {
  return (
    <React.Fragment>
      <input id={id} css={TriggerCss} onClick={() => setIsOpen(!isOpen)}/>
      <div
        css={DropdownButtonCss(selectItem, theme)}
        data-name="dropdown"
        onClick={() => setIsOpen(!isOpen)}
        onChange={event => event.preventDefault()}
      >
        <span role="combobox">{selectItem ? selectItem : placeholder}</span>
        <DropdownIcon css={DropdownIconCss}/>
      </div>
    </React.Fragment>
  );
}

const TriggerCss = css`
  display: none;
`;

const DropdownButtonCss = (selectItem: string, theme: Theme) => css`
  ${theme.common.drag_prevent}
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 12px;
  background-color: #f1f1f1;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  color: ${selectItem ? 'black' : '#757575'};
`;

const DropdownIconCss = css`
  width: 1rem;
`;
