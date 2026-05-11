import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import MineRegistration from './pages/MineRegistration';
import EmissionCalculator from './pages/EmissionCalculator';
import PathwaySimulator from './pages/PathwaySimulator';
import Analytics from './pages/Analytics';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/register-mine" element={<MineRegistration />} />
            <Route path="/calculate-emissions" element={<EmissionCalculator />} />
            <Route path="/pathway-simulator" element={<PathwaySimulator />} />
            <Route path="/analytics" element={<Analytics />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
