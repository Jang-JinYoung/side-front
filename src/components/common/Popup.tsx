import React from "react";
import { CustomButton } from "@atoms/";
import usePopupStroe from "@store/popup";
import {} from "@pages/";

const Popup = () => {
  const { isOpen, toggle } = usePopupStroe();
  // const [open, setOpen] = useState(isOpen);

  // useEffect(() => {}, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="popup_wrap">
      <div className="popup">
        <h2>Lorem ipsum</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
          assumenda velit expedita porro quibusdam, quidem sed ad obcaecati,
          debitis quo laborum et itaque esse magni ratione iusto totam?
          Provident, nemo!
        </p>
        <div className="btn_group">
          <CustomButton variant="info" text="확인" onClick={toggle} />
          <CustomButton variant="info" text="취소" onClick={toggle} />
        </div>
      </div>
    </div>
  );
};

export default Popup;
