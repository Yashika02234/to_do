// src/components/DashboardTabs.js
import React, { useState } from 'react';
import TodoList from './TodoList';

function DashboardTabs() {
  const [activeTab, setActiveTab] = useState('todos');

  return (
    <div>
      <div className="flex space-x-4 mb-6 border-b pb-2">
        <button
          onClick={() => setActiveTab('todos')}
          className={`px-4 py-2 rounded-t ${
            activeTab === 'todos' ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
        >
          Todos
        </button>
        <button
          onClick={() => setActiveTab('profile')}
          className={`px-4 py-2 rounded-t ${
            activeTab === 'profile' ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
        >
          Profile
        </button>
      </div>

      <div className="bg-white p-4 rounded shadow">
        {activeTab === 'todos' && <TodoList />}
        {activeTab === 'profile' && <div>This is the profile tab.</div>}
      </div>
    </div>
  );
}

export default DashboardTabs;
