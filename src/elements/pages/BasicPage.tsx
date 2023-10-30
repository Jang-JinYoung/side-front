import React from 'react';
import Header from '@components/Header';
import { Outlet } from 'react-router-dom';

const BasicPage = () => {
  return (
    <>
      <Header />
      <div className="container flex">
        <div
          className="contents pd-10"
          style={{ marginLeft: '25%', marginTop: '50px' }}
        >
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default BasicPage;
