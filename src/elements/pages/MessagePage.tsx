import React, { useState } from 'react';
import Header from '@components/Header';
import receiveMsgData from '../../data/receiveMessage.json';
import sendMsgData from '../../data/sendMessage.json';

interface IMsg {
  msgSrno: number;
  userNm: string;
  msg: string;
  writeTm: string;
}

const MessagePage = () => {
  const { result: receiveMsg } = receiveMsgData;
  const { result: sendMsg } = sendMsgData;

  const [dsp, setDsp] = useState('receive');

  return (
    <>
      <Header />
      <div className="message_wrap">
        <div
          style={{
            position: 'relative',
            float: 'left',
            width: '250px',
            height: '100%',
            borderRight: '1px solid black',
            // left: '10%',
            verticalAlign: 'center',
          }}
        >
          <ul className="pt-15">
            <li
              className={dsp === 'receive' ? 'fw-b' : ''}
              onClick={() => setDsp('receive')}
            >
              받은메시지
            </li>
            <li
              className={dsp === 'send' ? 'fw-b' : ''}
              onClick={() => setDsp('send')}
            >
              보낸메시지
            </li>
          </ul>
        </div>
        <div style={{ marginLeft: '300px' }}>
          <table className="message ta-c">
            <thead>
              <tr className="ta-c">
                <th style={{ width: '50px' }}>
                  <input type="checkbox"></input>
                </th>
                <th style={{ width: '75px' }}>보낸사람</th>
                <th style={{ width: '200px' }}>내용</th>
                <th style={{ width: '150px' }}>날짜</th>
              </tr>
            </thead>

            {dsp === 'receive' ? (
              <tbody>
                {receiveMsg.map((item: IMsg) => (
                  <tr key={item.msgSrno}>
                    <td>{item.msgSrno}</td>
                    <td>{item.userNm}</td>
                    <td>{item.msg}</td>
                    <td>{item.writeTm}</td>
                  </tr>
                ))}
              </tbody>
            ) : (
              <tbody>
                {sendMsg.map((item: IMsg) => (
                  <tr key={item.msgSrno}>
                    <td>{item.msgSrno}</td>
                    <td>{item.userNm}</td>
                    <td>{item.msg}</td>
                    <td>{item.writeTm}</td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        </div>
      </div>
    </>
  );
};

export default MessagePage;
