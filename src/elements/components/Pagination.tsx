import React from 'react';

interface IPagination {
  style?: string; // className
  totalCount: number; // 개수
  nowPage: string; // 현재페이지
  onClick: (page: number) => void; // 페이지 클릭 이벤트
}

const Pagination = (props: any) => {
  const { style, totalCount, nowPage, onClick } = props;

  return (
    <div className="mt-10 is-pagination">
      <span className="is-pagination-first" onClick={() => onClick(1)} />

      <span
        className="is-pagination-prev"
        onClick={() => onClick(Number(nowPage) - 1)}
      />

      {Array.from({ length: 10 }, (_, index) => index + 1).map((v) => (
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
        onClick={() => onClick(Number(nowPage) + 1)}
      />
      <span className="is-pagination-last" onClick={() => onClick(10)} />
    </div>
  );
};

export default Pagination;
