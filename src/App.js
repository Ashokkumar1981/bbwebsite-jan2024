import React from 'react';
import logo from './logo.svg';
// import './App.css';

import Layout from './components/bbLayout/bbLayout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga';

function App() {
  ReactGA.initialize('UA-136453075-1');

  return (

    
    <BrowserRouter>


      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}


    <div className='dark-grey-text font-weight-bolder'>
      <Helmet>
        <title>Bumblebees.io</title>
        <meta charSet="utf-8" />
        <meta name="description" content="A Simplified Ingenious Performance Testing Tool. Bumblebees.io is simple and ready to use performance testing tool that enables developers build high performing web applications" />
      </Helmet>
      <Layout/>

        
      
    </div>
    </BrowserRouter>
  );
}




export default App;
