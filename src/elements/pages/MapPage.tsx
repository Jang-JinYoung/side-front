import React from 'react';
import { IInputText } from '@atoms/Input';
import Search from '@components/Search';
import SimpleMap from '@components/Map';

const MapPage = () => {
  const searchSelectProps = {
    name: 'search',
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => console.log(e),
    optionList: [
      { value: 'title', name: '제목' },
      { value: 'contents', name: '내용' },
      { value: 'userNm', name: '닉네임' },
    ],
  };

  const searchInputProps: IInputText = {
    className: 'ml-10',
    name: '',
    value: '',
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => console.log(e),
  };

  return (
    <div>
      <SimpleMap />
    </div>
  );
};

export default MapPage;
