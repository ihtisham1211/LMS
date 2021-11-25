import * as React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/assets/vendor/animate.css/animate.min.css';
import '../src/assets/vendor/aos/aos.css';
// import "../src/assets/vendor/bootstrap/css/bootstrap.min.css";
import '../src/assets/vendor/bootstrap-icons/bootstrap-icons.css';

import '../src/assets/vendor/boxicons/css/boxicons.min.css';
import '../src/assets/vendor/remixicon/remixicon.css';
import '../src/assets/vendor/swiper/swiper-bundle.min.css';
import '../src/assets/css/style.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
