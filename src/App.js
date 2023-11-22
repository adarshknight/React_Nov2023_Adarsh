// App.js
import React, { useState } from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import NavigationBar from './components/NavigationBar';
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
          {/* Pass the onLogin function as a prop */}
          <Route path="/" element={<LoginForm onLogin={handleLogin} />} />
          <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
          <Route path="/m" element={<BookCatalog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
  }


export default App;