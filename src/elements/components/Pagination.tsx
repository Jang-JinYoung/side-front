import React, { useEffect, useState } from 'react';

interface IPagination {
  style?: string; // className
  totalCount: number; // 개수
  nowPage: number; // 현재페이지
  onClick: (page: number) => void; // 페이지 클릭 이벤트
}

/*
floor 내림
round 반올림
ceil 올림
*/

const Pagination = (props: any) => {
  const { style, totalCount, nowPage, onClick } = props;

  const [page, setPage] = useState<number[]>(
    Array.from({ length: 10 }, (_, index) => index + 1),
  );

  useEffect(() => {
    // 11, 21, ...
    if (nowPage % 10 === 1 && nowPage !== 1) {
      setPage(
        Array.from(
          { length: 10 },
          (_, index) => index + 1 + Math.floor(nowPage / 10) * 10,
        ),
      );
    }

    // 10, 20, ...
    if (nowPage % 10 === 0 && nowPage !== 10) {
      setPage(
        Array.from(
          { length: 10 },
          (_, index) => Math.floor(nowPage / 10) * 10 - (index+1),
        ),
      );
    }
  }, [nowPage]);

  // 이전 버튼
  const prevBtnClick = () => {
    onClick(nowPage - 1);
    
  }

  return (
    <div className="mt-10 is-pagination">

      <span className="is-pagination-first" onClick={() => onClick(1)} />

      <span
        className="is-pagination-prev"
        onClick={prevBtnClick}
      />

      {page.map((v) => (
        <span
          key={v}
          className={
            nowPage == v ? `is-pagination-num is-current` : 'is-pagination-num '
          }
          onClick={() => onClick(v)}
        >
          {v}
        </span>
      ))}
      <span
        className="is-pagination-next"
        onClick={() => onClick(nowPage + 1)}
      />
      <span className="is-pagination-last" onClick={() => onClick(10)} />
    </div>
  );
};

export default Pagination;
