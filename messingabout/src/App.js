import React from 'react';
import { Bunny } from './components/BuckBunny';
import { Style } from './components/BuckBunny';
import { ClickCounters } from'./components/ClickCounter';
import NavBar from './components/NavBar';
import { DataStore } from './components/ClickCounter';
import './App.css';

function App() {
  return (
    <div id="root">
      <NavBar />
      <Bunny />
      <Style />
      <ClickCounters />
      <DataStore />
           </div>
    );
};


export default App;
