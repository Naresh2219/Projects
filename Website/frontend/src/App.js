import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import LatestArticles from './components/LatestArticles';
import FeaturedProducts from './components/FeaturedProducts';
import UpcomingEvents from './components/UpcomingEvents';
import CommunityHighlights from './components/CommunityHighlights';
import Footer from './components/Footer';
import Signup from './components/Signup';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />}/>
            <Route path="/" element={
              <>
                <Hero />
                <LatestArticles />
                <FeaturedProducts />
                <UpcomingEvents />
                <CommunityHighlights />
              </>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
