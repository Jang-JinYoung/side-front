import React, { useState } from 'react';
import Header from '@components/Header';
import Input from '@atoms/Input';
import receiveMsgData from '../../../data/receiveMessage.json';
import sendMsgData from '../../../data/sendMessage.json';
import { useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom';

interface IMsg {
  msgSrno: number;
  userNm: string;
  msg: string;
  writeTm: string;
  readYn: boolean;
}

const MessageListTemplate = () => {

  const navigate = useNavigate();
  const { result: receiveMsg } = receiveMsgData;
  const { result: sendMsg } = sendMsgData;

  const [params] = useSearchParams();
  const code = params.get('code');

  // 메시지
  const msgList: IMsg[] = code === '10000001' ? receiveMsg : sendMsg

  const [chekced, setChecked] = useState<number[]>([]);
  const [allChecked, setAllChecked] = useState<boolean>(false);


  const onChangeAction = (msgSrno: number) => {
    if (chekced.includes(msgSrno)) {
      setChecked(chekced.filter((item) => item !== msgSrno));
    } else {
      setChecked([...chekced, msgSrno]);
    }
  };

  return (
    <div>
      {/* 검색기능 */}
      <div>
        <select>
          <option value="userNm">아이디</option>
          <option value="msg">내용</option>
        </select>
        <input className="ml-10" type='text' placeholder='쪽지검색' />
        <button className='ml-10'>검색</button>
      </div>

      {/* 쪽지목록 */}
      <div>
        <table className="mt-10">
          <thead className=''>
            <tr className="">
              <th style={{ width: '30px' }}>
                <Input.CheckBox
                  onChange={() => console.log("A")}
                  name="all"
                  value={0}
                  checked={allChecked && chekced.length === receiveMsg.length}
                />
              </th>
              <th style={{ width: '150px' }}>보낸 사람</th>
              <th style={{ width: '700px' }}>내용</th>
              <th style={{ width: '150px' }}>날짜</th>
            </tr>
          </thead>
          <tbody style={{ cursor: "pointer" }}>
            {
              msgList.map((msg: IMsg) => (
                <tr key={msg.msgSrno} className={!msg.readYn ? "blue" : ""} onClick={() => navigate(`/message/${msg.msgSrno}`, { state: msg })}>
                  <td>
                    <Input.CheckBox
                      onChange={() => onChangeAction(msg.msgSrno)}
                      name="all"
                      value={msg.msgSrno}
                      checked={chekced.includes(msg.msgSrno)}
                    />
                  </td>
                  <td>{msg.userNm}</td>
                  <td>{msg.msg}</td>
                  <td>{msg.writeTm}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default MessageListTemplate;
