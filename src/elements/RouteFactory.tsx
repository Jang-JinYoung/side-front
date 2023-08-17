import React, { ReactNode } from 'react';
import MainPage from '@pages/MainPage';
import { useRoutes } from 'react-router-dom';
import MessagePage from '@pages/MessagePage';
import MessageTemplate from './template/MessageTemplate';

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
      element: <MessagePage />,
      children: [
        {
          path: '',
          element: <MessageTemplate />,
        },
      ],
    },
  ];
  // return useRoutes([...basicRoutes, ...authRoutes]);
  return useRoutes(routes);
};

export default RouteFactory;
