import React from 'react';
import Header from '@components/Header';
import SubNav from '@components/SubNav';
import { Outlet } from 'react-router-dom';

const BasicPage = () => {
  return (
    <>
      <Header />
      <div className="container flex">
        <SubNav />
        <div className="contents pd-10">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default BasicPage;
