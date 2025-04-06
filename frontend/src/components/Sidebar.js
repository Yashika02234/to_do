// src/components/Sidebar.js
import React from 'react';

function Sidebar() {
  return (
    <aside className="bg-gray-100 p-4 w-48 min-h-screen shadow-md">
      <ul className="space-y-2 font-medium">
        <li><a href="#" className="hover:text-blue-500">Home</a></li>
        <li><a href="#" className="hover:text-blue-500">My Todos</a></li>
        <li><a href="#" className="hover:text-blue-500">Settings</a></li>
      </ul>
    </aside>
  );
}

export default Sidebar;
