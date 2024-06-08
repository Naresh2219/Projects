import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import LatestArticles from './components/LatestArticles';
import FeaturedProducts from './components/FeaturedProducts';
import UpcomingEvents from './components/UpcomingEvents';
import CommunityHighlights from './components/CommunityHighlights';
import Footer from './components/Footer';
import Signup from './components/Signup';
import Login from './components/Login';
import UsersList from './components/UsersList';
import Welcome from './components/Welcome';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/signup" element={<Signup onLogin={handleLogin} />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/users" element={<UsersList />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route
              path="/"
              element={
                isAuthenticated ? (
                  <>
                    <Hero />
                    <LatestArticles />
                    <FeaturedProducts />
                    <UpcomingEvents />
                    <CommunityHighlights />
                  </>
                ) : (
                  <Navigate to="/welcome" />
                )
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
