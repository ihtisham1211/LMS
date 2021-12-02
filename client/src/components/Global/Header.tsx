import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { Routes } from '../../utils/Constants/Routes';
import { brandTitle } from '../../utils/Constants/statics';
import { uuid } from '../../utils/Constants/constants';

export const Header: FC = (): JSX.Element => {
  const [selected, setSelected] = useState<string>('Home');

  return (
    <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center">
        <h1 className="logo me-auto">
          <Link to="/">{brandTitle}</Link>
        </h1>
        {/*<a href="index.html" className="logo me-auto"><img src="assets/img/logo.png" alt="" className="img-fluid"/>*/}
        <nav id="navbar" className="navbar order-last order-lg-0">
          <ul>
            {Routes.map((item) => {
              return (
                <li onClick={() => setSelected(item.title)} key={uuid()}>
                  <Link className={`${selected === item.title && 'active'}`} to={item.route}>
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <Link className={'get-started-btn'} to={'/login'}>
          Get Started
        </Link>
      </div>
    </header>
  );
};
