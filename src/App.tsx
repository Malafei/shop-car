import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/Home';
import LoginPage from './components/auth/Login';
import RegisterPage from './components/auth/Register'
import DefaultLayout from './components/containers/DefaultLayout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path ="/" element={<DefaultLayout/>}> 
          <Route index element= {<HomePage/>} />
          <Route path="login" element={<LoginPage/>}/>
          <Route path="register" element={<RegisterPage/>}/>


        </Route>

    </Routes>
    
    </BrowserRouter>

  );
}

export default App;
