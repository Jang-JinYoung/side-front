import React from 'react';
import Comment from '@components/Comment';

const BoardDetailTemplate = () => {
    return (
        <div>

            {/* 헤더영역 */}
            <div>
                제목
                <div>
                    아이콘
                    작성시간
                </div>
            </div>

            {/* 내용영역 */}
            <div className='bd-t'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, nemo? Corporis laudantium, quibusdam sunt maxime unde, suscipit laboriosam assumenda sed exercitationem et quos voluptates ducimus aut perspiciatis dolorum mollitia vel.
            </div>

            {/* 댓글영역 */}
            <div className='comment-wrap'>

                <Comment />
                <Comment />

            </div>

        </div>
    )
};

export default BoardDetailTemplate;