import Header from '@components/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';

const MessagePage = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default MessagePage;