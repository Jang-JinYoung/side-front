import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header>
      <nav>
        <div>
          <div className="pt-30">
            <ul className="header-links">
              <li onClick={() => navigate("/board")}>게시판</li>
              <li onClick={() => navigate("/skeleton")}>스켈레톤</li>
            </ul>
            <span className="login" onClick={() => navigate("/login")}>
              로그인
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
