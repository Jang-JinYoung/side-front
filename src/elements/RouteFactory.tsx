import React, { ReactNode } from 'react';
import MainPage from '@pages/MainPage';
import { useRoutes } from 'react-router-dom';
import BasicPage from '@pages/BasicPage';
import MessageListTemplate from './template/message/MessageListTemplate';
import MessageDetailTemplate from './template/message/MessageDetailTemplate';

interface IRoutes {
  path: string;
  element: ReactNode;
  children?: {
    path: string;
    element: ReactNode;
  }[];
}

const RouteFactory = () => {
  const routes: IRoutes[] = [
    {
      path: '/',
      element: <MainPage />,
    },
    {
      path: '/message',
      element: <BasicPage />,
      children: [
        {
          path: '',
          element: <MessageListTemplate />,
        },
        {
          path: ':msgSrno',
          element: <MessageDetailTemplate />,
        },
      ],
    },
  ];
  // return useRoutes([...basicRoutes, ...authRoutes]);
  return useRoutes(routes);
};

export default RouteFactory;
