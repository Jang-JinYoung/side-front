import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import navData from '../../data/subNav.json';

interface INav {
  code: string;
  name: string;
}

const SubNav = () => {
  const [params] = useSearchParams();
  const code = params.get('code');
  const navigate = useNavigate();

  const { mainNav, subNav } = navData.result;

  return (
    <div className="sub-nav pd-10 br-1">
      <span className="mr-20">{mainNav.name}</span>
      <ul className="pl-10">
        {subNav.map((nav: INav) => (
          <li
            key={nav.code}
            className={code === nav.code ? 'fw-b' : ''}
            onClick={() => navigate(`/message?code=${nav.code}`)}
          >
            {nav.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubNav;
