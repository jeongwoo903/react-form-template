import * as React from 'react';
import {css, Theme} from '@emotion/react';
import {ChangeEvent, MouseEvent} from 'react';

type ListType = {
  label: string;
};

type DropdownEvent = ChangeEvent<HTMLInputElement> | MouseEvent<HTMLElement>;

interface DropdownListProps {
  list: ListType[];
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectItem?: string;
  setSelectItem: React.Dispatch<React.SetStateAction<string>>;
  onClick: (event: DropdownEvent) => void;
}

export default function DropdownList({
                                       list,
                                       isOpen,
                                       setIsOpen,
                                       selectItem,
                                       setSelectItem,
                                       onClick,
                                     }: DropdownListProps) {
  const clickHandler = (event: DropdownEvent) => {
    const target = (event.target as HTMLElement).textContent;

    if (target) {
      setSelectItem(target);
    }

    onClick(event);
    setIsOpen(false);
  };

  return (
    <React.Fragment>
      {isOpen && (
        <ul css={DropdownListCss} role="listbox">
          {list.map((item: ListType, index: number) => (
            <li
              css={[DropdownItemCss, item.label === selectItem && SelectedItemCss]}
              key={index}
              value={item.label}
              onClick={clickHandler}
            >
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </React.Fragment>
  );
}

const SelectedItemCss = (theme: Theme) => css`
  background-color: ${theme.color.primary} !important;
  color: white;
`;

const DropdownItemCss = (theme: Theme) => css`
  ${theme.typography.body3}
  padding: 8px;
  cursor: pointer;
  border-radius: 8px;

  :hover {
    background-color: ${theme.color.placeholder};
  }
`;

const DropdownListCss = css`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: start;
`;
