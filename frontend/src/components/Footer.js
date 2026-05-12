import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold mb-4">About</h3>
            <p className="text-sm">Coal Mine Carbon Neutrality Application helps track and reduce carbon emissions.</p>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="text-sm space-y-2">
              <li><a href="/" className="hover:text-green-400">Home</a></li>
              <li><a href="/dashboard" className="hover:text-green-400">Dashboard</a></li>
              <li><a href="/documentation" className="hover:text-green-400">Documentation</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Resources</h3>
            <ul className="text-sm space-y-2">
              <li><a href="/guides" className="hover:text-green-400">Guides</a></li>
              <li><a href="/api-docs" className="hover:text-green-400">API Docs</a></li>
              <li><a href="/faq" className="hover:text-green-400">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Contact</h3>
            <p className="text-sm">Email: info@coalcarbon.org</p>
            <p className="text-sm">Phone: +91-XXXX-XXXX-XXXX</p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-sm">
          <p>&copy; 2026 Coal Mine Carbon Neutrality. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
