import React from 'react';
import { createRoot } from 'react-dom/client';

import Home from './App';
import './styles/globals.css';
import { Layout } from './components';
import { BrowserRouter as Router } from "react-router-dom";

createRoot(document.getElementById('root')).render(
<Router>
 <Layout>
    <Home />
 </Layout>
</Router>);
