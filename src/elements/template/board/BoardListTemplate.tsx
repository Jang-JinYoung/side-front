import React from 'react';
import { IInputText } from '@atoms/Input';
import { _popup } from '@components/Popup';
import Search from '@components/Search';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Pagination from '@components/Pagination';
import { getWriteTm, isToday } from '@lib/day';

const BoardListTemplate = () => {
    const navigate = useNavigate();

    const [searchParams, setSearchParams] = useSearchParams();

    const currentPage = searchParams.get('page') ?? "1";
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

    return (
        <div className="contents">
            {/* 버튼영역 */}
            <div>
                <button onClick={() => _popup('메시지 삭제', '삭제하시겠습니까?')}>
                    글쓰기
                </button>
            </div>

            {/* 글 영역 */}
            <div>
                <table style={{ width: "80vw", height: "" }}>
                    <thead>
                        <tr style={{ height: "35px" }}>
                            <th style={{ width: "5%" }}>번호</th>
                            <th style={{ width: "65%" }}>제목</th>
                            <th style={{ width: "10%" }}>작성자</th>
                            <th style={{ width: "10%" }}>작성날짜</th>
                            <th className='ta-c'>조회수</th>
                        </tr>
                    </thead>
                    <tbody>

                        {/* 공지영역 */}
                        <tr style={{ height: "40px" }}>
                            <td className='ta-c'>{ }</td>
                            <td className='pl-10'>공지사항 (v1.1.1)</td>
                            <td className='pl-10'>SYSTEM</td>
                            <td className='pl-10'>{getWriteTm("2022.05.14 09:38")}</td>
                            <td className='ta-c'>0</td>
                        </tr>

                        {/* 글 영역 */}
                        {
                            Array.from({ length: 10 }, (_, v) => (
                                <tr key={v} style={{ height: "40px", cursor: "pointer" }} onClick={() => navigate(`/board/${v}`)}>
                                    <td className='ta-c'>{((Number(currentPage) - 1) * 10) + v + 1}</td>
                                    <td className='pl-10'>Lorem ipsum dolor sit amet consectetur adipisicing</td>
                                    <td className='pl-10'>ipsum</td>
                                    <td className='pl-10'>{getWriteTm("2022.05.14 09:38")}</td>
                                    <td className='ta-c'>0</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

            {/* <div>
                <button onClick={() => _popup('메시지 삭제', '삭제하시겠습니까?')}>
                    글쓰기
                </button>
            </div> */}

            <Pagination
                currentPage={Number(currentPage)}

                totalCount={165}
                pageSize={10}
                onClick={(page: string) =>
                    setSearchParams({ code, page })
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
