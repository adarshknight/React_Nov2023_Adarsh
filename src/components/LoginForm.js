import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

const StyledTextField = styled(TextField)({
  width: '100%',
  marginBottom: '1rem',
});

const StyledButton = styled(Button)({
  width: '100%',
  padding: '0.5rem',
  marginTop: '1rem',
  borderRadius: '5px',
  border: 'none',
  backgroundColor: '#333',
  color: '#fff',
  fontSize: '1.2rem',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'background-color 0.2s ease-out',
  '&:hover': {
    backgroundColor: '#555',
  },
});

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLoginSubmit}>
        <h1>Login</h1>
        <StyledTextField
          label="Username"
          variant="outlined"
          type="text"
          value={username}
          onChange={handleUsernameChange}
          required
        />
        <StyledTextField
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <Link to="/bookcatalog">
          <StyledButton type="submit">Login</StyledButton>
        </Link>
        <p>Don't Have an Account? </p>
        <Link to="/reg">
          <StyledButton>Register</StyledButton>
        </Link>
      </form>
    </div>
  );
}

export default Login;
