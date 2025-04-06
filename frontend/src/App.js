import React, { useState, useEffect } from 'react';
import Register from './components/Register';
import Login from './components/Login';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import DashboardTabs from './components/DashboardTabs';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  return (
    <div className="min-h-screen font-sans">
      {!isLoggedIn ? (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">📝 Todo App</h1>
            <div className="space-y-6">
              <div className="border border-gray-300 p-6 rounded-md">
                <Register />
              </div>
              <div className="border border-gray-300 p-6 rounded-md">
                <Login onLogin={handleLogin} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col h-screen">
          <Navbar />
          <div className="flex flex-1">
            <Sidebar />
            <main className="flex-1 bg-white overflow-y-auto">
              <div className="flex justify-end p-4">
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                >
                  Logout
                </button>
              </div>
              <DashboardTabs />
            </main>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
