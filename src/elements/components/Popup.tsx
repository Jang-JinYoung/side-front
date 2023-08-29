import React, { useState } from 'react';
import { confirmAlert } from 'react-confirm-alert'; // Import

// const options: ReactConfirmAlertProps = {
//   title: 'Title',
//   message: 'Message',
//   buttons: [
//     {
//       label: 'Yes',
//       onClick: () => alert('Click Yes'),
//     },
//     {
//       label: 'No',
//       onClick: () => alert('Click No'),
//     },
//   ],
//   closeOnEscape: true,
//   closeOnClickOutside: false,
//   keyCodeForClose: [8, 32],
//   willUnmount: () => {},
//   // afterClose: () => {},
//   onClickOutside: () => {},
//   onKeypress: () => {},
//   onKeypressEscape: () => {},
//   overlayClassName: 'overlay-custom-class-name',
// };

// confirmAlert(options);

interface IPopup {
  title: string; // 제목
  message: string; // 내용
  confirm?: () => void;
}

export const Popup = ({ title, message, confirm }: IPopup) => {
  // console.log("A")
  confirmAlert({
    closeOnClickOutside: false,
    overlayClassName: 'black_overlay dsp-b',
    customUI: ({ onClose }) => {
      return (
        <div className="popup_wrap comm align-c dsp-b">
          <div className="fs-16">{title}</div>
          <div className="fs-14 font-999">{message}</div>
          <div className="Width-100 ta-c mt-30">
            <button
              className="bg-black font-white"
              onClick={() => {
                if (confirm) {
                  confirm();
                }
                onClose();
              }}
            >
              확인
            </button>
            <button className="ml-10 mt-10" onClick={() => onClose()}>
              취소
            </button>
          </div>
        </div>
      );
    },
  });
};

export const _popup = (
  title: string,
  message: string,
  confirm?: () => void,
) => {
  Popup({ title, message, confirm });
};

export const MessagePopup = () => {

  confirmAlert({
    closeOnClickOutside: false,
    overlayClassName: 'black_overlay dsp-b',
    
    customUI: ({ onClose }) => {
      // const [text, setText] = useState("");
      return (
        <div className="popup_wrap comm align-c dsp-b">

          <div className='fw-b' style={{ fontSize: "12px" }}>
            <div>
              받는 사람
              <span className="ml-10" style={{ fontWeight: 'lighter' }}>userNm</span>
            </div>
          </div>

          <div className='mt-10' style={{ border: "1px solid #adafaa", width: "415px", height: "327px", backgroundColor: "" }}>
            <textarea className='mg-10' value={""} onChange={(e) => console.log(e.target)} maxLength={100} />
          </div>

          <div className="Width-100 ta-c mt-30">
            <button
              className="bg-black font-white"
              onClick={() => {
                if (confirm) {
                  confirm();
                }
                onClose();
              }}
            >
              전송
            </button>
            <button className="ml-10 mt-10" onClick={() => onClose()}>
              취소
            </button>
          </div>
        </div>
      );
    },
  });
};

export const _messagePopup = () => {
  MessagePopup();
}


// export default Popup;
