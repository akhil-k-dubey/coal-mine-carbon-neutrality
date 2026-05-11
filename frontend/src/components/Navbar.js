import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-green-800 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">
            ♻️ Coal Carbon Neutrality
          </Link>
          <div className="flex space-x-6">
            <Link to="/" className="hover:text-green-200">Home</Link>
            <Link to="/dashboard" className="hover:text-green-200">Dashboard</Link>
            <Link to="/register-mine" className="hover:text-green-200">Register Mine</Link>
            <Link to="/calculate-emissions" className="hover:text-green-200">Calculate</Link>
            <Link to="/pathway-simulator" className="hover:text-green-200">Pathways</Link>
            <Link to="/analytics" className="hover:text-green-200">Analytics</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
