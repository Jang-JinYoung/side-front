import React from 'react';
import Select, { ISelect } from '@atoms/Select';
import Input, { IInputText } from '@atoms/Input';

interface IProps {
  style?: string;
  searchSelectProps: ISelect;
  searchInputProps: IInputText;
}

const Search = (props: IProps) => {
  const { style, searchSelectProps, searchInputProps } = props;

  return (
    <div className={style} style={{ textAlign: 'center' }}>
      <Select {...searchSelectProps} />
      <Input.Text {...searchInputProps} />
      <button className="ml-10">검색</button>
    </div>
  );
};

export default Search;
