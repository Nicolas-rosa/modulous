import React from 'react';
import { NavLink } from 'react-router-dom';

const navItems = [
    { name: 'Home', path: '/home', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg> },
    { name: 'Buttons', path: '/buttons', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd" /></svg> },
    { name: 'Cards', path: '/cards', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5L9 4H4z" /></svg> },
    { name: 'Sidebars', path: '/sidebars', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 001 1h4a1 1 0 001-1V4a1 1 0 00-1-1H3zm10 0a1 1 0 00-1 1v12a1 1 0 001 1h4a1 1 0 001-1V4a1 1 0 00-1-1h-4z" clipRule="evenodd" /></svg> },
    { name: 'Effects', path: '/effects', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.636 14.364a1 1 0 010-1.414l8-8a1 1 0 011.414 1.414l-8 8a1 1 0 01-1.414 0zM12 6a1 1 0 112 0 1 1 0 01-2 0zM4 8a1 1 0 112 0 1 1 0 01-2 0zM8 12a1 1 0 112 0 1 1 0 01-2 0zM12 16a1 1 0 112 0 1 1 0 01-2 0z" clipRule="evenodd" /></svg> },
    { name: 'Header', path: '/header', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" /></svg> },
];

const Sidebar = ({ isSidebarOpen, closeSidebar }) => (
  <aside className={`absolute md:relative z-20 md:z-auto bg-black/10 backdrop-blur-xl w-64 md:w-56 flex-shrink-0 border-r border-white/10 transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
    <div className="h-full flex flex-col">
      <div className="h-16 flex items-center justify-center border-b border-white/10">
        <h1 className="text-2xl font-bold text-gray-100 tracking-wider">MODULOUS</h1>
      </div>
      <nav className="flex-1 px-4 py-6 space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            onClick={closeSidebar}
            className={({ isActive }) => 
                `flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                        ? 'bg-white/10 text-white'
                        : 'text-gray-300 hover:bg-white/5 hover:text-white'
                }`
            }
          >
            {item.icon}
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  </aside>
);

export default Sidebar;