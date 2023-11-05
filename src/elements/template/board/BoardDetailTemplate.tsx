import React, { useState } from 'react';
import Comment, { IComment } from '@components/Comment';
import Pagination from '@components/Pagination';
import _ from 'lodash';

const BoardDetailTemplate = () => {
  const [currentCommentPage, setCurrentCommnetPage] = useState<number>(1);

  const [comment, setComment] = useState<IComment>({
    userNm: '닉네임',
    writeTm: '2022-03-03',
    comment: '',
  });

  const [commentList, setCommentList] = useState<IComment[]>([
    {
      userNm: '닉네임',
      writeTm: '2022-03-03',
      comment: '123',
    },
  ]);

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
        {commentList.length > 0 && (
          <>
            {_.chunk(commentList, 3)[currentCommentPage - 1].map(
              (comment, index) => (
                <Comment key={index} {...comment} />
              ),
            )}
            <Pagination
              currentPage={currentCommentPage}
              totalCount={commentList.length}
              pageSize={3}
              onClick={(page: number) => setCurrentCommnetPage(page)}
            />
          </>
        )}

        <div className="comment-write" style={{ padding: '0 30px' }}>
          <textarea
            name="comment"
            value={comment.comment}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setComment({ ...comment, [e.target.name]: e.target.value })
            }
          />
          <div
            style={{
              padding: '10px 0 10px',
              textAlign: 'right',
              marginRight: '',
            }}
          >
            <button
              onClick={() => {
                setCommentList([...commentList, comment]);
                setComment({ ...comment, comment: '' });
              }}
            >
              댓글작성
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardDetailTemplate;
