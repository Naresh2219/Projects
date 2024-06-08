import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div>
      <h1>Welcome to Our Site</h1>
      <p>Please sign up or log in to continue.</p>
      <Link to="/signup">Sign Up</Link>
      <Link to="/login">Log In</Link>
    </div>
  );
};

export default Welcome;
