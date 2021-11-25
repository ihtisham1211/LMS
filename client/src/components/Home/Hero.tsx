import React, { FC } from 'react';
import { Link } from 'react-router-dom';

export const Hero: FC = (): JSX.Element => {
  return (
    <section id="hero" className="d-flex justify-content-center align-items-center">
      <div className="container position-relative">
        <h1>
          Learning Today,
          <br />
          Leading Tomorrow
        </h1>
        <h2>We are team of talented designers making websites with Bootstrap</h2>
        <Link className={'btn-get-started'} to={'/login'}>
          Get Started
        </Link>
      </div>
    </section>
  );
};
