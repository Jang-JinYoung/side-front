import React from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import navData from '../../data/subNav.json';

interface INav {
  code: string;
  name: string;
}

interface IResult {
  result: {
    [key: string]: {
      mainNav: INav;
      subNav: INav[];
    };
  };
};




const SubNav = () => {
  const [params] = useSearchParams();
  const code = params.get('code');
  const navigate = useNavigate();

  const { pathname} =useLocation();

  const { result }: IResult = navData;

  const { mainNav, subNav }  = result[pathname];


  return (
    <div className="sub-nav pd-10 br-1">
      <span style={{}}></span>
      <span className="mr-20">{mainNav.name}</span>
      <ul className="pl-10">
        {subNav.map((nav: INav) => (
          <li
            key={nav.code}
            className={code === nav.code ? 'fw-b' : ''}
            onClick={() => navigate(`${pathname}?code=${nav.code}`)}
          >
            {nav.name}
          </li>
        ))}
      </ul>
        
    </div>
  );
};

export default SubNav;
