import React, { FC } from 'react';
import sideImage from '../../assets/img/about.jpg';
import { HomeAbout, uuid } from '../../utils/Constants/constants';

export const About: FC = (): JSX.Element => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 order-1 order-lg-2">
            <img src={sideImage} className="img-fluid" alt="image-side" />
          </div>

          <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
            <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
            <ul>
              {HomeAbout.map((item) => (
                <li key={uuid()}>
                  <i className="bi bi-check-circle" /> {item.title}
                </li>
              ))}
            </ul>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
