import React from 'react';
import './App.css';
import { ToastContainer} from 'react-toastify';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ToastContainer positon="top-center"/>
        <Routes>
         <Route path='/' element={<Home/>}/>
        </Routes> 
      </div>
    </BrowserRouter>
  );
}

export default App;
