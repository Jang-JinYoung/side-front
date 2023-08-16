import React from 'react';
import { useNavigate } from 'react-router-dom';
import useUserStore from '@store/user';
import { useStore } from 'zustand';
import { _popup } from './Popup';

const Header = () => {
  const navigate = useNavigate();

  const { logout } = useStore(useUserStore);

  return (
    <header>
      <nav className="pt-30">
        <ul className="header-links">
          <li onClick={() => navigate('/board')}>게시판</li>
          <li onClick={() => navigate('/skeleton')}>스켈레톤</li>
        </ul>
        {/* {!user ? (
              <span className="login" onClick={() => navigate('/login')}>
                로그인
              </span>
            ) : ( */}
        <ul className="login">
          <li
            onClick={() => _popup('로그아웃', '로그아웃 하시겠습니까?', logout)}
          >
            로그아웃
          </li>
          <li onClick={() => navigate('/message')}>메시지</li>
        </ul>
        {/* )} */}
      </nav>
    </header>
  );
};

export default Header;
