// server.js

const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));

// Connect to MongoDB
const mongoURI = 'mongodb://127.0.0.1:27017/Websites';

mongoose.connect(mongoURI)
  .then(() => {
    console.log(`MongoDB connected at ${mongoURI}`);
    // Start the server after successful MongoDB connection
    const PORT = process.env.PORT || 5001;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => console.error('MongoDB connection error:', err));

// Additional connection error handling
mongoose.connection.on('error', err => {
  console.error(`MongoDB connection error: ${err}`);
});

mongoose.connection.on('disconnected', () => {
  console.log('MongoDB disconnected');
});

// User Schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

// Routes
app.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res.status(400).json({ message: 'Username or email already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword
    });

    await newUser.save();

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error });
  }
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find the user by username
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }

    // Check the password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }

    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in', error });
  }
});

// Route to get all users
app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error });
  }
});


// Route to update a user by ID
app.put('/users/:id', async (req, res) => {
  const userId = req.params.id;
  const { username, email, password } = req.body;

  try {
    // Find user by ID and update
    const updatedUser = await User.findByIdAndUpdate(userId, { username, email, password }, { new: true });

    // Check if user was found and updated
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Send success response
    res.status(200).json({ message: 'User updated successfully', user: updatedUser });
  } catch (error) {
    // Handle errors
    console.error('Error updating user:', error);
    res.status(500).json({ message: 'Error updating user', error });
  }
});

// Route to delete a user
app.delete('/users/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User deleted successfully', deletedUser });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user', error });
  }
});

// Start the server on a different port if needed
const PORT = process.env.PORT || 5000; // Change 5000 to another available port if needed
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
