import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route } from 'react-router';
import React from 'react';
import { Provider as ChakraProvider } from '@/components/ui/provider';
import { BaseLayout } from './components/Layout/Layout';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/home';
import Index from './pages/_index';
import NotFound from './pages/NotFound';
import '@fontsource/lato/index.css';
import ReactGA from 'react-ga4';
const TRACKING_ID = 'G-RJFBTSN4WT';

ReactGA.initialize(TRACKING_ID);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <HelmetProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<BaseLayout />}>
              <Route index element={<Home />} />
              <Route path="/tokeniza" element={<Index client="tokeniza" />} />
              <Route path="/scenium" element={<Index client="scenium" />} />
              <Route path="/brla" element={<Index client="avenia" />} />
              <Route path="/avenia" element={<Index client="avenia" />} />
              <Route path="/admin" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </ChakraProvider>
  </React.StrictMode>,
);
