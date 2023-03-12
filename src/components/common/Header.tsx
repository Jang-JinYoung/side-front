import React from "react";
interface HeaderProps {
  name: string;
}

const Header = (props: HeaderProps) => {
  return (
    <header>
      <nav>
        <ul>
          <li
            onClick={() => {
              console.log("AAA");
            }}
          >
            1
          </li>
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
