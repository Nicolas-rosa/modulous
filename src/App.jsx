import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';

const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const closeSidebar = () => {
    if (isSidebarOpen) {
      setSidebarOpen(false);
    }
  };

  return (
    <div className="flex h-screen bg-transparent text-white overflow-hidden">
      <Sidebar isSidebarOpen={isSidebarOpen} closeSidebar={closeSidebar} />
      <div className="flex-1 flex flex-col overflow-hidden">
         <header className="md:hidden h-16 bg-black/10 backdrop-blur-xl border-b border-white/10 flex items-center px-4">
             <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="text-gray-200 hover:text-white" aria-label="Toggle menu">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
             </button>
             <div className="flex-1 text-center">
                <h1 className="text-xl font-bold text-gray-100 tracking-wider">MODULOUS</h1>
             </div>
             <div className="w-6"></div> {/* Spacer */}
         </header>
         <main className="flex-1 overflow-y-auto p-6 md:p-10">
            <div className="max-w-7xl mx-auto">
                <Outlet />
            </div>
         </main>
      </div>
    </div>
  );
};

export default App;