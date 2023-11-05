import React, { ReactNode } from 'react';
import _ from 'lodash';

interface IPagination {
  style?: string; // className
  totalCount: number; // 총 개수
  pageSize: number; // 몇개 쓸건지
  currentPage: number; // 현재페이지
  onClick: (page: number) => void; // 페이지 클릭 이벤트
  children?: ReactNode;
}

/*
floor 내림
round 반올림
ceil 올림
*/
const Pagination = (props: IPagination) => {
  const { style, totalCount, pageSize, currentPage, onClick } = props;

  const lastPage = Math.ceil(totalCount / pageSize);
  const page = _.chunk(_.range(1, lastPage + 1), pageSize);

  return (
    <div className="mt-10 is-pagination">
      <span
        className={`is-pagination-first ${currentPage === 1 ? 'disabled' : ''}`}
        onClick={() => onClick(1)}
        role="button"
        aria-disabled={currentPage === 1}
      />

      <span
        className={`is-pagination-prev ${currentPage === 1 ? 'disabled' : ''}`}
        onClick={() => onClick(currentPage - 1)}
        role="button"
        aria-disabled={currentPage === 1}
      />

      {page[Math.ceil(currentPage / pageSize) - 1].map((v) => (
        <span
          key={v}
          className={`is-pagination-num ${
            currentPage === v ? 'is-current' : ''
          }`}
          onClick={() => onClick(v)}
        >
          {v}
        </span>
      ))}

      <span
        className={`is-pagination-next ${
          currentPage === lastPage ? 'disabled' : ''
        }`}
        onClick={() => onClick(currentPage + 1)}
        role="button"
        aria-disabled={currentPage === lastPage}
      />

      <span
        className={`is-pagination-last ${
          currentPage === lastPage ? 'disabled' : ''
        }`}
        onClick={() => onClick(lastPage)}
        role="button"
        aria-disabled={currentPage === lastPage}
      />
    </div>
  );
};

export default Pagination;
