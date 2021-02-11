import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './Routes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Slideshow from './components/Slideshow';

import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'typeface-nunito';
import 'typeface-raleway';

const page = (
      <React.StrictMode>
       <Router>
         <header>
           <Slideshow />
           <Navbar />
         </header>
        
         <main>
          <Routes />
        </main>
        
        <footer>
          <Footer />
        </footer>
      </Router>
      </React.StrictMode>
);

const rootElement = document.getElementById('root');

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate(page, rootElement);
} else {
ReactDOM.render(page, rootElement);
}