import React from 'react';
import { createRoot } from 'react-dom/client';

import './standard.css';
import './index.css';

import App from './components/App';

const container = document.getElementById('root');
if (!container) throw new Error('Root container missing in index.html');
const root = createRoot(container);

root.render(<App />);
