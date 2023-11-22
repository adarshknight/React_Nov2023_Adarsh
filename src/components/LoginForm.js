// components/LoginForm.js
import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { styled } from '@mui/system';
import { Link as RouterLink } from 'react-router-dom';

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
  const [showRegistration, setShowRegistration] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    
    onLogin();
  };

  const handleCreateAccountClick = () => {
    setShowRegistration(true);
  };

  const handleCreateAccountSubmit = (e) => {
    e.preventDefault();
    console.log('Create account submitted');
    setShowRegistration(false);
  };

  return (
    <div className="login-container">
      <form
        className="login-form"
        onSubmit={showRegistration ? handleCreateAccountSubmit : handleLoginSubmit}
      >
        <h1>{showRegistration ? 'Create Account' : 'Login'}</h1>
        {showRegistration && (
          <>
            <StyledTextField
              label="Username"
              variant="outlined"
              type="text"
              value={username}
              onChange={handleUsernameChange}
              required
            />
            <StyledTextField
              label="Email"
              variant="outlined"
              type="email"
              value={email}
              onChange={handleEmailChange}
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
            <StyledTextField
              label="Confirm Password"
              variant="outlined"
              type="password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              required
            />
          </>
        )}
        {!showRegistration && (
          <>
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
          </>
        )}
        <StyledButton type="submit">{showRegistration ? 'Create Account' : 'Login'}</StyledButton>
        {showRegistration ? (
          <p>
            Already have an account? <button component={RouterLink} to="/m" onClick={() => setShowRegistration(false)}>Login</button>
          </p>
        ) : (
          <p>
            Don't have an account? <button onClick={handleCreateAccountClick}>Create account</button>
          </p>
        )}
      </form>
    </div>
  );
}

export default Login;