import React from 'react';

import { Footer, Blog, Possibillity, Features, WhatGPT3, Header } from './containers';
import { CTA, Brand, Navbar } from './components';
import './App.css'

function App() {
  return (
    <div className='App'>
        <div className='gradient__bg'>
          <Navbar/>
          <Header/>
        </div>
          <div>
            <Brand/>
            <WhatGPT3/>
            <Features/>
            <Possibillity/>
            <CTA/>
            <Blog/>
            <Footer/>
          </div>
    </div>
  )
}

export default App