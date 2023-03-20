import React from 'react';
import { createRoot } from 'react-dom/client';

import Home from './App';
import './styles/globals.css';
import { Layout } from './components';

createRoot(document.getElementById('root')).render(
 <Layout>
    <Home />
 </Layout>);
