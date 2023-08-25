import React, { useState } from 'react';
import { _popup } from '@components/Popup';
import { useLocation, useNavigate } from 'react-router-dom';

const MessageWriteTemplate = () => {

    const navigate = useNavigate();
    const { state: msg } = useLocation();

    const [text, setText] = useState("");

    return (
        <div>
            <div className='fw-b' style={{fontSize: "12px"}}>
                <div>
                    받는 사람 
                    <span className="ml-10"style={{fontWeight: 'lighter'}}>{msg.userNm}</span>
                </div>
            </div>

            <div className='mt-10' style={{ border: "1px solid #adafaa", width: "415px", height: "327px", backgroundColor: "" }}>
                <textarea className='mg-10' value={text} onChange={(e) => setText(e.target.value)} maxLength={100} />
            </div>

            <div className="mt-10 ps-r">
                <span className="ml-10">{text.length}/100</span>
                <button className="ml-250" onClick={() => console.log("a")}>보내기</button>
                <button className='ml-10' onClick={() => navigate(-1)}>취소</button>
            </div>
        </div>
    )
};

export default MessageWriteTemplate;