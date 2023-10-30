import React from 'react';

interface IOption {
  style?: string;
  value: string | number;
  name: string;
}

export interface ISelect {
  style?: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  disabled?: boolean;
  defaultValue?: string | number;

  optionList: IOption[];
}

const Select = (props: ISelect) => {
  const { style, name, onChange, disabled, defaultValue, optionList } = props;

  return (
    <select
      className={style}
      name={name}
      onChange={onChange}
      disabled={disabled}
      defaultValue={defaultValue}
    >
      {optionList.map((option: IOption) => (
        <option
          className={option.style}
          key={option.value}
          value={option.value}
        >
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default Select;
