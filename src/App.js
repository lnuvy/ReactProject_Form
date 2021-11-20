import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, NotFound } from './pages';
import Sidebar from './front/Sidebar';
import Menu from './front/Menu';

function App({open}) {

  // Sidebar 로직

  return (
    <div className="App">
      <Sidebar open={open}>
        <Menu></Menu>
      </Sidebar>

      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="*" element={<NotFound/>}></Route>
      </Routes>
    </div>
  )
}

export default App;
