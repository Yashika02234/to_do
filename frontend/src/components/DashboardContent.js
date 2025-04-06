// src/components/DashboardContent.js
import React from 'react';

function DashboardContent({ tab }) {
  return (
    <div className="flex justify-center items-center h-64 text-lg">
      {tab === 'todos' && <div>📋 Your Todo List will appear here</div>}
      {tab === 'stats' && <div>📊 Statistics Dashboard (coming soon)</div>}
      {tab === 'profile' && <div>🙍‍♀️ User Profile Section</div>}
    </div>
  );
}

export default DashboardContent;
