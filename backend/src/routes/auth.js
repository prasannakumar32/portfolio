const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();

// Mock user data for testing
const mockUsers = [
  { id: 1, username: 'admin', email: 'admin@example.com', password: 'admin123' },
  { id: 2, username: 'user', email: 'user@example.com', password: 'password123' }
];

router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    
    // Check if user already exists (mock check)
    const existingUser = mockUsers.find(user => user.email === email);
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create new user (mock)
    const newUser = {
      id: mockUsers.length + 1,
      username,
      email,
      password // In production, this would be hashed
    };
    mockUsers.push(newUser);
    
    const token = jwt.sign({ userId: newUser.id }, process.env.JWT_SECRET || 'fallback_secret', { expiresIn: '7d' });
    
    res.status(201).json({ token, user: { id: newUser.id, username, email } });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Find user by email only (password not required for testing)
    const user = mockUsers.find(u => u.email === email);
    if (!user) {
      // If user not found, create a new user with any email
      const newUser = {
        id: mockUsers.length + 1,
        username: email.split('@')[0], // Use email prefix as username
        email,
        password: password || 'nopassword'
      };
      mockUsers.push(newUser);
      
      const token = jwt.sign({ userId: newUser.id }, process.env.JWT_SECRET || 'fallback_secret', { expiresIn: '7d' });
      return res.json({ token, user: { id: newUser.id, username: newUser.username, email } });
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET || 'fallback_secret', { expiresIn: '7d' });
    
    res.json({ token, user: { id: user.id, username: user.username, email } });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
