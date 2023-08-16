import React from 'react';
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
            <button className="" onClick={() => onClose()}>
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
  // console.log('a');
};

// export default Popup;
