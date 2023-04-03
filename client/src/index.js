import React from 'react';
import { Toaster } from 'react-hot-toast';
import { createRoot } from 'react-dom/client';

import Home from './App';
import './styles/globals.css';
import { Layout } from './components';
import { BrowserRouter as Router } from "react-router-dom";
import { StateContext } from './context/StateContext';


createRoot(document.getElementById('root')).render(
<Router>
   <StateContext>
      <Layout>
         <Toaster />
         <Home />
      </Layout>
   </StateContext>
</Router>
);
