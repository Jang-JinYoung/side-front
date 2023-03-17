import React from "react";
import { useNavigate } from "react-router-dom";
interface HeaderProps {
  name: string;
}

const Header = (props: HeaderProps) => {
  const navigate = useNavigate();

  return (
    <header>
      <nav>
        <ul>
          <li onClick={() => navigate("/board")}>게시판</li>
          <li onClick={() => navigate("/skeleton")}>스켈레톤</li>
          <li>3</li>
        </ul>
        <div id="membmer">
          <span className="login">로그인</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
