import React, { ReactNode } from 'react';
import MainPage from '@pages/MainPage';
import { useRoutes } from 'react-router-dom';
import BasicPage from '@pages/BasicPage';
import MessageListTemplate from './template/message/MessageListTemplate';
import MessageDetailTemplate from './template/message/MessageDetailTemplate';
import MessageWriteTemplate from './template/message/MessageWrtieTemplate';
import BoardListTemplate from './template/board/BoardListTemplate';
import BoardDetailTemplate from './template/board/BoardDetailTemplate';
import MapPage from '@pages/MapPage';
import PlanTemplate from './template/plan/PlanTemplate';
import SheetPage from '@pages/sheet/SheetPage';

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
        {
          path: 'write',
          element: <MessageWriteTemplate />,
        },
      ],
    },
    {
      path: '/board',
      element: <BasicPage />,
      children: [
        {
          path: '',
          element: <BoardListTemplate />,
        },
        {
          path: ':boardSrno',
          element: <BoardDetailTemplate />,
        },
      ],
    },
    {
      path: '/map',
      element: <MapPage />,
      children: [
        {
          path: '',
          element: <PlanTemplate />,
        },
      ],
    },
    {
      path: '/sheet',
      element: <SheetPage />
    }
  ];

  // return useRoutes([...basicRoutes, ...authRoutes]);
  return useRoutes(routes);
};

export default RouteFactory;
