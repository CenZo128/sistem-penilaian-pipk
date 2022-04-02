import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';

import Sidebar from './components/Sidebar'
import MainPage from './components/MainPage'

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar></Sidebar>
        <MainPage></MainPage>
      </div>
    </div>
  );
}

export default App;
