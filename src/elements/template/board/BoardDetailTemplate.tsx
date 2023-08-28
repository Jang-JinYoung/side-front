import React from 'react';
import Comment from '@components/Comment';
import Pagination from '@components/Pagination';

const BoardDetailTemplate = () => {
  return (
    <div>
      {/* 헤더영역 */}
      <div>
        제목
        <div>아이콘 작성시간</div>
      </div>

      {/* 내용영역 */}
      <div className="bd-t">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, nemo?
        Corporis laudantium, quibusdam sunt maxime unde, suscipit laboriosam
        assumenda sed exercitationem et quos voluptates ducimus aut perspiciatis
        dolorum mollitia vel.
      </div>

      {/* 댓글영역 */}
      <div className="comment-wrap mt-10">
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Pagination
          currentPage={Number(1)}
          totalCount={24}
          pageSize={20}
          onClick={(page: string) => console.log(page)}
        />

        <div className='comment-write' style={{padding: "0 30px"}}>
            <textarea/>
        </div>

        <div style={{paddingBottom: "30px"}}>123</div>
      </div>
    </div>
  );
};

export default BoardDetailTemplate;
