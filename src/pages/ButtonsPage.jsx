import React from 'react';
import ComponentCard from '../components/ComponentCard';

// --- MOCK DATA ---
const buttonComponents = [
  {
    title: 'Primary Button',
    style: 'modern',
    theme: 'dark',
    code: `<button class="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg transition-all shadow-lg shadow-indigo-500/20">
  Primary
</button>`,
  },
  {
    title: 'Secondary Button',
    style: 'classic',
    theme: 'light',
    code: `<button class="bg-white/10 hover:bg-white/20 text-white font-bold py-2 px-4 rounded-lg transition-all border border-white/20">
  Secondary
</button>`,
  },
  {
    title: 'Outline Button',
    style: 'modern',
    theme: 'dark',
    code: `<button class="bg-transparent hover:bg-white/10 text-white font-semibold py-2 px-4 border border-white/30 rounded-lg transition-all">
  Outline
</button>`,
  },
  {
    title: 'Icon Button',
    style: 'modern',
    theme: 'dark',
    code: `<button class="bg-white/10 hover:bg-white/20 text-white font-bold p-3 rounded-full transition-all">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
  </svg>
</button>`,
  },
];

const ButtonsPage = () => (
    <div>
        <h1 className="text-3xl font-bold text-white mb-6">Buttons</h1>
        <div className="flex flex-wrap gap-4 mb-8">
             <select className="bg-black/20 border border-white/10 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 appearance-none">
                <option className="bg-gray-800">Filter by Style</option>
                <option className="bg-gray-800">Modern</option>
                <option className="bg-gray-800">Classic</option>
            </select>
             <select className="bg-black/20 border border-white/10 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 appearance-none">
                <option className="bg-gray-800">Filter by Theme</option>
                <option className="bg-gray-800">Dark</option>
                <option className="bg-gray-800">Light</option>
            </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {buttonComponents.map((comp) => (
                <ComponentCard key={comp.title} title={comp.title} code={comp.code} />
            ))}
        </div>
    </div>
);

export default ButtonsPage;