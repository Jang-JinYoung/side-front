import React, { useState } from 'react';
import { _messagePopup, _popup } from './popup/Popup';

export interface IComment {
    userNm: string; // 닉네임
    writeTm: string; // 작성시간
    comment: string; // 댓글
}

const Comment = ({ userNm, writeTm, comment }: IComment) => {

    const [dsp, setDsp] = useState<boolean>(true);

    return (
        <div className="comment">
            <div className='pd-10'>
                <span role='button' style={{ textDecoration: "underline", textUnderlinePosition: "under" }}
                    onClick={() => setDsp(!dsp)}>{userNm}</span>
                <span> {writeTm}</span>
                <div className={`test ${dsp ? '' : 'dsp-n'}`}>
                    <ul>
                        <li onClick={() => { _messagePopup(); setDsp(false); }}>쪽지보내기</li>
                    </ul>
                </div>
            </div>
            <div className='pl-10'>
                {comment}
            </div>
        </div>
    )
};

export default Comment;