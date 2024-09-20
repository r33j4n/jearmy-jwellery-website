import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Jwellery from './pages/Jwellery';
import Thaali from './pages/thaali';
import Chain from './pages/chain';
import Bracelet from './pages/bracelet';
import Aram from './pages/aram';
import Necklace from './pages/necklace';
import Earing from './pages/earing';
import Bangle from './pages/bangle';
import Ring from './pages/ring';
import Gallery from './pages/galleryPage';
import AboutUS from './pages/aboutPage';
import ContactPage from './pages/contactPage';

// Example: Adding Helmet to enhance SEO on specific routes

import { HelmetProvider } from 'react-helmet-async';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HelmetProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/jwellery" element={<Jwellery />} />
        <Route path="/jwellery/chains" element={<Chain />} />
        <Route path="/jwellery/thaali" element={<Thaali />} />
        <Route path="/jwellery/bracelets" element={<Bracelet />} />
        <Route path="/jwellery/harams" element={<Aram />} />
        <Route path="/jwellery/necklace" element={<Necklace />} />
        <Route path="/jwellery/earings" element={<Earing />} />
        <Route path="/jwellery/bangles" element={<Bangle />} />
        <Route path="/jwellery/rings" element={<Ring />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path='/about' element={<AboutUS />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  </HelmetProvider>
);