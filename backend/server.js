const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const logger = require('./middlewares/logger');  // Import logger middleware
const auth = require('./middlewares/auth');      // Import auth middleware
const errorHandler = require('./middlewares/errorHandler'); // Import error handler

// Load environment variables from .env file
dotenv.config();

const app = express();

// Apply logger middleware globally
app.use(logger);
// Example private route using authentication middleware
app.get('/appointments', auth, (req, res) => {
  res.json({ message: `Hello, ${req.user.name}. Here are your appointments.` });
});
// Error handling middleware (should be the last middleware)
app.use(errorHandler);


// Use the environment variable for the MongoDB URI
const mongoURI = process.env.MONGO_URI;

// Check if the URI is present
if (!mongoURI) {
  console.error('MongoDB connection URI is missing');
  process.exit(1);  // Exit the process if the URI is not defined
}

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Successfully Connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Example route
app.get('/', (req, res) => {
  res.send('Hello from the Healthcare Management System backend');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
