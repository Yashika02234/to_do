// src/components/DashboardTabs.js
import React, { useState } from 'react';
import DashboardContent from './DashboardContent';

function DashboardTabs() {
  const [activeTab, setActiveTab] = useState('todos');

  return (
    <div className="flex flex-col w-full p-4">
      <div className="flex gap-4 border-b pb-2 mb-4">
        <button onClick={() => setActiveTab('todos')} className={activeTab === 'todos' ? 'text-blue-600 font-bold' : ''}>Todos</button>
        <button onClick={() => setActiveTab('stats')} className={activeTab === 'stats' ? 'text-blue-600 font-bold' : ''}>Stats</button>
        <button onClick={() => setActiveTab('profile')} className={activeTab === 'profile' ? 'text-blue-600 font-bold' : ''}>Profile</button>
      </div>

      <DashboardContent tab={activeTab} />
    </div>
  );
}

export default DashboardTabs;
