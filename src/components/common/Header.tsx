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
          <li onClick={() => navigate("/board")}>1</li>
          <li>2</li>
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
