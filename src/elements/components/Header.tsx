import React from 'react';
import { useNavigate } from 'react-router-dom';
import useUserStore from '@store/user';
import { useStore } from 'zustand';
import { _popup } from './Popup';

const Header = () => {
  const navigate = useNavigate();

  const { logout } = useStore(useUserStore);

  return (
    <header className="flex">
      <div className="section1">
        <div>LOGO 영역</div>
      </div>
      <div className="section2">
        <nav className="">
          <div>
            <ul className="typ1">
              <li onClick={() => navigate('/board')}>게시판</li>
              <li onClick={() => navigate('/skeleton')}>스켈레톤</li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="section3">
        <ul className="typ1">
          <li
            onClick={() => _popup('로그아웃', '로그아웃 하시겠습니까?', logout)}
          >
            로그아웃
          </li>
          <li onClick={() => navigate('/message')}>메시지</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;

{
  /* {!user ? (
          <span className="login" onClick={() => navigate('/login')}>
          로그인
          </span>
        ) : ( */
}
