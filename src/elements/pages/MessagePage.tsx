import React from 'react';
import { Outlet } from 'react-router-dom';

const MessagePage = () => {
  console.log(Outlet);
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default MessagePage;
