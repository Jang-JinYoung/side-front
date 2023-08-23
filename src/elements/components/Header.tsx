import React from 'react';
import { useNavigate } from 'react-router-dom';
import useUserStore from '@store/user';
import { useStore } from 'zustand';
import { _popup } from './Popup';

const Header = () => {
  const navigate = useNavigate();

  const { logout } = useStore(useUserStore);

  return (
    <header className="header flex bb-1">
      <div className="logo br-1 pd-10">LOGO</div>
      <div className="nav br-1 pd-10">
        <nav>
          <ul className="typ1">
            <li onClick={() => navigate('/board')}>게시판</li>
            <li onClick={() => navigate('/skeleton')}>스켈레톤</li>
          </ul>
        </nav>
      </div>
      <div className="user pd-10">
        <ul className="typ1">
          <li onClick={() => navigate('/message?code=10000001')}>메시지</li>
          <li
            onClick={() => _popup('로그아웃', '로그아웃 하시겠습니까?', logout)}
          >
            로그아웃
          </li>
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
