import React from 'react'

import { Blog, Feature, Footer, Header, Possibility, Whatjarvis } from './container'
import { Calltoaction, Brand, Navbar } from './components';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient_bg'>
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <Whatjarvis/>
      <Feature/>
      <Possibility/>
      <Calltoaction/>
      <Blog/>
      <Footer/>

    </div>
  )
}

export default App