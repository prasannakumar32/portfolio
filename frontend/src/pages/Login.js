import React, { useState } from 'react';
import {
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  Box,
  Alert,
} from '@mui/material';
import axios from 'axios';

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', loginData);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      window.location.href = '/dashboard';
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return React.createElement(
    Container,
    { component: 'main', maxWidth: 'xs' },
    React.createElement(
      Box,
      {
        sx: {
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        },
      },
      React.createElement(
        Paper,
        { elevation: 3, sx: { padding: 4, width: '100%' } },
        React.createElement(
          Typography,
          { component: 'h1', variant: 'h4', align: 'center', gutterBottom: true },
          'Sign In'
        ),
        error &&
          React.createElement(
            Alert,
            { severity: 'error', sx: { mb: 2 } },
            error
          ),
        React.createElement(
          Box,
          { component: 'form', onSubmit: handleSubmit, sx: { mt: 1 } },
          React.createElement(TextField, {
            margin: 'normal',
            required: true,
            fullWidth: true,
            id: 'email',
            label: 'Email Address',
            name: 'email',
            autoComplete: 'email',
            autoFocus: true,
            value: loginData.email,
            onChange: handleChange,
          }),
          React.createElement(TextField, {
            margin: 'normal',
            required: true,
            fullWidth: true,
            name: 'password',
            label: 'Password',
            type: 'password',
            id: 'password',
            autoComplete: 'current-password',
            value: loginData.password,
            onChange: handleChange,
          }),
          React.createElement(
            Button,
            {
              type: 'submit',
              fullWidth: true,
              variant: 'contained',
              sx: { mt: 3, mb: 2 },
              disabled: loading,
            },
            loading ? 'Signing In...' : 'Sign In'
          )
        )
      )
    )
  );
};

export default Login;
