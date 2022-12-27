import React from "react";

import { Navbar } from './Components'
import { About, Program_list } from './Container'
import './App.scss';

function App() {
  return (
      <div className='app'>
        <Navbar />
        <About />
          <Program_list/>
      </div>
  );
}

export default App;
