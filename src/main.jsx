import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import App from './App';
import HomePage from './pages/HomePage';
import ButtonsPage from './pages/ButtonsPage';
import ComingSoonPage from './pages/ComingSoonPage';

const Root = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route index element={<Navigate to="/home" replace />} />
                <Route path="home" element={<HomePage />} />
                <Route path="buttons" element={<ButtonsPage />} />
                <Route path="cards" element={<ComingSoonPage title="Cards" />} />
                <Route path="sidebars" element={<ComingSoonPage title="Sidebars" />} />
                <Route path="effects" element={<ComingSoonPage title="Effects" />} />
                <Route path="header" element={<ComingSoonPage title="Headers" />} />
            </Route>
        </Routes>
    </BrowserRouter>
);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Root />);