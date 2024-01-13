import { useEffect } from 'react';
import Button from '@atoms/button/Button';
import ButtonWrap from '@components/ButtonWrap';
import { Popup, _messagePopup } from '@components/popup/Popup';
import { ILi } from '@atoms/table/types';
import Ul from '@atoms/table/Ul';

const liData: ILi[] = [
  { title: '1', onClick: () => console.log('') },
  { title: '2', onClick: () => console.log('') },
  { title: '3', onClick: () => console.log('') },
];

const SheetPage = () => {
  useEffect(() => {
    // Popup({message: "저장하시겠습니까 ?"});
  }, []);

  const onConfirm = () => {
    console.log('확인');
  };

  return (
    <div>
      <div style={{ float: 'right' }}>
        {/* <Popup /> */}
        <Button onClick={onConfirm} text="목록" />
        <Button onClick={onConfirm} text="수정" />
        {/* <Button onClick={onConfirm} text="저장" /> */}
      </div>

      <div
        style={{
          borderRight: '1px solid black',
          float: 'left',
          width: '10vw',
          height: '100vh',
          backgroundColor: 'skyblue',
        }}
      >
        <div>
          <Ul title="1" liList={liData} />
          <Ul title="2" liList={liData} isHidden={true}/>
          <h1 onClick={() => console.log('A')}>123</h1>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </div>
      </div>

      <div style={{
        clear: "both",
        border: "1px solid black",
        // backgroundColor: "red",
        width: "100%",
        height: "100%",
      }}>

      </div>
    </div>
  );
};

export default SheetPage;
