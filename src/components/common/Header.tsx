import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
interface HeaderProps {
  name: string;
}

interface CustomWindow extends Window {
  ANDROID?: any;
}
declare global {
  interface Window {
    sendDataToReact: (data: string) => void;
  }
}

const customWindow = window as CustomWindow;

const Header = (props: HeaderProps) => {
  const navigate = useNavigate();

  const showAndroidToast = (toast: string) => {
    if (customWindow.ANDROID) {
      customWindow.ANDROID.showToast(toast);
    }
    // alert(toastshowAndroidToast);
  };

  const sendDataToReact = (data: string) => {
    alert(data);
    // do something with data
  };

  useEffect(() => {
    window.sendDataToReact = sendDataToReact;
  }, []);

  return (
    <header>
      <nav>
        <ul>
          <li onClick={() => navigate("/board")}>게시판</li>
          <li onClick={() => navigate("/skeleton")}>스켈레톤</li>
          <li onClick={() => showAndroidToast("hello andriod")}>웹뷰테스트</li>
        </ul>
        <div id="membmer">
          <span className="login">로그인</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
