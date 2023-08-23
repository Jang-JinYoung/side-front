import React, { useState } from 'react';
import Header from '@components/Header';
import Input from '@atoms/Input';
import receiveMsgData from '../../data/receiveMessage.json';
import sendMsgData from '../../data/sendMessage.json';

interface IMsg {
  msgSrno: number;
  userNm: string;
  msg: string;
  writeTm: string;
}

const MessageTemplate = () => {
  const { result: receiveMsg } = receiveMsgData;
  const { result: sendMsg } = sendMsgData;

  const [dsp, setDsp] = useState('receive');

  const [chekced, setChecked] = useState<number[]>([]);
  const [allChecked, setAllChecked] = useState<boolean>(false);

  const onAllChangeAction = () => {
    setAllChecked(!allChecked);
    if (allChecked) {
      // true -> false
      setChecked([]);
    } else {
      // false -> true
      if (dsp === 'receive') {
        setChecked(receiveMsg.map((msg) => msg.msgSrno));
      } else {
        setChecked(sendMsg.map((msg) => msg.msgSrno));
      }
    }
  };

  const onChangeAction = (msgSrno: number) => {
    if (chekced.includes(msgSrno)) {
      setChecked(chekced.filter((item) => item !== msgSrno));
    } else {
      setChecked([...chekced, msgSrno]);
    }
  };

  return (
      <div>
        <table className="ta-c" style={{}}>
          <thead>
            <tr className="">
              <th style={{ width: '50px' }}>
                <Input.CheckBox
                  onChange={onAllChangeAction}
                  name="all"
                  value={0}
                  checked={allChecked && chekced.length === receiveMsg.length}
                />
              </th>
              <th style={{ width: '75px' }}>보낸사람</th>
              <th style={{ width: '200px' }}>내용</th>
              <th style={{ width: '150px' }}>날짜</th>
            </tr>
          </thead>

          {dsp === 'receive' ? (
            <tbody>
              {receiveMsg.map((msg: IMsg) => (
                <tr key={msg.msgSrno}>
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
              ))}
            </tbody>
          ) : (
            <tbody>
              {sendMsg.map((msg: IMsg) => (
                <tr key={msg.msgSrno}>
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
              ))}
            </tbody>
          )}
        </table>
      </div>
  );
};
export default MessageTemplate;
