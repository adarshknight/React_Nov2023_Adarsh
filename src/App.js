
import React, { useState } from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import Registration from './components/Registration';
import BookCatalog from './components/BookCatalog';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };


  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          {}
          <Route path="/" element={<LoginForm onLogin={handleLogin} />} />
          <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
          <Route path="/bookcatalog" element={<BookCatalog />} />
          <Route path='/reg' element={<Registration/>}/>
          <Route path="/bookcatalog" element={<BookCatalog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
  }


export default App;