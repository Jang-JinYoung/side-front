import { _popup } from '@components/popup/Popup';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const MessageDetailTemplate = () => {

    const { state: msg } = useLocation();
    const navigate = useNavigate();


    return (
        <div>
            {/* 버튼영역 */}
            <div>
                <button onClick={() => _popup("메시지 삭제", "삭제하시겠습니까?")}>삭제</button>
                <button className='ml-10' onClick={() => navigate("/message/write", { state : msg})}>답장</button>
                <button className='ml-10' onClick={() => navigate(-1)}>목록</button>
            </div>

            <hr />

            {/* 보낸 정보 */}
            <div>
                <ul style={{paddingLeft: "0px"}}>
                    <li>보낸사람: {msg.userNm}</li>
                    <li>보낸사람: {msg.writeTm}</li>
                </ul>
            </div>

            <hr />
            {/* 내용 */}
            <div style={{overflow: "auto"}}>
                {msg.msg}
            </div>

        </div>
    )
};

export default MessageDetailTemplate;