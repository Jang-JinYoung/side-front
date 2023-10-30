import React, { useState } from 'react';
import { IInputText } from '@atoms/Input';
// import { _popup } from '@components/Popup';
import Search from '@components/Search';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Pagination from '@components/Pagination';
import { getWriteTm } from '@lib/day';

const BoardListTemplate = () => {
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = searchParams.get('page') ?? '1';
  const code = searchParams.get('code') as string;

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

  // 공지 감추기
  const [noti, setNoti] = useState<boolean>(false);

  // 페이지 카운팅
  const [pageSize, setPageSize] = useState<number>(10);

  return (
    <div className="contents" style={{ width: '1000px', fontSize: '13px' }}>
      {/* 버튼영역 */}
      <div className="board-top-list block">
        {/* <button onClick={() => _popup('메시지 삭제', '삭제하시겠습니까?')}>
          글쓰기
        </button> */}
        <div className="mb-10" style={{ float: 'right' }}>
          <div className="check_box" style={{ display: 'inline-block' }}>
            <input
              type="checkbox"
              id="noti_hidden"
              onChange={() => setNoti(!noti)}
              // style={{
              //   width: '20px',
              //   height: '25px',
              // }}
              checked={noti}
            />
            <label htmlFor="noti_hidden">공지 감추기</label>
            <select
              className="ml-10"
              style={{ height: '25px' }}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setPageSize(Number(e.target.value))
              }
            >
              <option value="10">10개씩</option>
              <option value="15">15개씩</option>
              <option value="30">30개씩</option>
            </select>
          </div>
        </div>
      </div>
      {/* 글 영역 */}
      <div style={{ display: 'block' }}>
        <table style={{ width: '100%', fontSize: '13px' }}>
          <thead style={{}}>
            <tr style={{ height: '35px' }}>
              <th style={{ width: '5%' }}>번호</th>
              <th style={{ width: '65%', textAlign: 'center' }}>제목</th>
              <th style={{ width: '10%' }}>작성자</th>
              <th style={{ width: '10%' }}>작성날짜</th>
              <th className="ta-c">조회수</th>
            </tr>
          </thead>
          <tbody style={{ borderBottom: '1px solid gray' }}>
            {/* 공지영역 */}
            {!noti && (
              <tr className="noti" style={{ height: '40px', color: 'red' }}>
                <td className="ta-c">공지</td>
                <td className="pl-10">공지사항 (v1.1.1)</td>
                <td className="pl-10">SYSTEM</td>
                <td className="pl-10">{getWriteTm('2022.05.14 09:38')}</td>
                <td className="ta-c">0</td>
              </tr>
            )}

            {/* 글 영역 */}
            {Array.from({ length: pageSize }, (_, v) => (
              <tr
                key={v}
                style={{ height: '40px', cursor: 'pointer' }}
                onClick={() => navigate(`/board/${v}`)}
              >
                <td className="ta-c">
                  {(Number(currentPage) - 1) * 10 + v + 1}
                </td>
                <td className="pl-10" style={{ textAlign: 'left' }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing
                </td>
                <td className="pl-10">ipsum</td>
                <td className="pl-10">{getWriteTm('2022.05.14 09:38')}</td>
                <td className="ta-c">0</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 페이지 영역 */}
      <div className="search" style={{ height: '130px' }}>
        <Pagination
          currentPage={Number(currentPage)}
          totalCount={13}
          pageSize={pageSize}
          onClick={(page: string) => setSearchParams({ code, page })}
        />
        {/* 검색 영역 */}
        <Search
          style="mt-10"
          searchSelectProps={searchSelectProps}
          searchInputProps={searchInputProps}
        />
      </div>
    </div>
  );
};

export default BoardListTemplate;
