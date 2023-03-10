import React from 'react'

import {Brand, Cta, Navbar} from './components';
import {Blog, Features, Footer, Header, Possibility, WhatApp1} from './containers';

import './App.css'

const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
            <Navbar/>
            <Header/>
        </div>
        <Brand/>
        <WhatApp1/>
        <Features/>
        <Possibility/>
        <Cta/>
        <Blog/>
        <Footer/>
    </div>
  )
}

export default App