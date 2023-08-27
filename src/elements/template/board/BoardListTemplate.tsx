import React, { useState } from 'react';
import { IInputText } from '@atoms/Input';
import { _popup } from '@components/Popup';
import Search from '@components/Search';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import Pagination from '@components/Pagination';

const BoardListTemplate = () => {
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();

  const nowPage = searchParams.get('page');
  const code = searchParams.get('code') as string;

  console.log(nowPage);

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
      {/* 버튼영역 */}
      <div>
        <button onClick={() => _popup('메시지 삭제', '삭제하시겠습니까?')}>
          등록
        </button>
        <button className="ml-10" onClick={() => navigate(-1)}>
          목록
        </button>
      </div>

      <hr />

      {/* 글 영역 */}
      <div>
        <table>
          <thead>
            <tr>
              <th>1</th>
              <th>2</th>
              <th>3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
            </tr>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Pagination
        nowPage={nowPage}
        totalCount={50}
        onClick={(page: string) =>
          setSearchParams({code, page})
        }
      />

      {/* 검색 영역 */}
      <Search
        style="mt-10"
        searchSelectProps={searchSelectProps}
        searchInputProps={searchInputProps}
      />
    </div>
  );
};

export default BoardListTemplate;
