const express = require('express');
const router = express.Router();

// Dummy route for Home Page
router.get('/home', (req, res) => {
  res.json({ message: 'Welcome to the Home Page' });
});

// Dummy route for Services Page
router.get('/services', (req, res) => {
  res.json({ message: 'Welcome to the Services Page' });
});

// Dummy route for About Page
router.get('/about', (req, res) => {
  res.json({ message: 'Welcome to the About Page' });
});

// Dummy route for Contact Page
router.get('/contact', (req, res) => {
  res.json({ message: 'Welcome to the Contact Page' });
});

module.exports = router;
