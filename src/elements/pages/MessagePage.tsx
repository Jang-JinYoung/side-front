import React from 'react';
import Header from '@components/Header';
import data from '../../data/receiveMessage.json';

interface IMsg {
  msgSrno: number;
  userNm: string;
  msg: string;
  writeTm: string;
}

const MessagePage = () => {
  const { result } = data;

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
            <li>받은메시지</li>
            <li>보낸메시지</li>
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
            <tbody>
              {result.map((item: IMsg) => (
                <tr key={item.msgSrno}>
                  <td>{item.msgSrno}</td>
                  <td>{item.userNm}</td>
                  <td>{item.msg}</td>
                  <td>{item.writeTm}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MessagePage;
