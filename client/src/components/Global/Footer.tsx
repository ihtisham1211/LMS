import React, { FC } from 'react';
import { brandTitle } from '../../utils/Constants/statics';

export const Footer: FC = (): JSX.Element => {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 footer-contact">
              <h3>{brandTitle}</h3>
              <p>
                address <br />
                street
                <br />
                Pakistan <br />
                <strong>Phone:</strong> +92 313 1231231
                <br />
                <strong>Email:</strong> info@example.com
                <br />
              </p>
            </div>
            <div className="col-lg-2 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i> <a href="#">Home</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i> <a href="#">About us</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i> <a href="#">Services</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i> <a href="#">Terms of service</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i> <a href="#">Web Design</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i> <a href="#">Web Development</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i> <a href="#">Product Management</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" /> <a href="#">Marketing</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i> <a href="#">Graphic Design</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container d-md-flex py-4">
        <div className="me-md-auto text-center text-md-start">
          <div className="copyright">
            &copy; Copyright{' '}
            <strong>
              <span>{brandTitle}</span>
            </strong>
            . All Rights Reserved
          </div>
        </div>
        <div className="social-links text-center text-md-right pt-3 pt-md-0">
          <a href="#" className="twitter">
            <i className="bx bxl-twitter" />
          </a>
          <a href="#" className="facebook">
            <i className="bx bxl-facebook" />
          </a>
          <a href="#" className="instagram">
            <i className="bx bxl-instagram" />
          </a>
          <a href="#" className="google-plus">
            <i className="bx bxl-skype" />
          </a>
          <a href="#" className="linkedin">
            <i className="bx bxl-linkedin" />
          </a>
        </div>
      </div>
    </footer>
  );
};
