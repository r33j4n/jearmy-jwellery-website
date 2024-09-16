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


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<App />}></Route>
      <Route path = "/jwellery" element = {<Jwellery/>}></Route>
      <Route path="/jwellery/chains" element={<Chain/>}></Route>
      <Route path="/jwellery/thaali" element={<Thaali/>}></Route>
      <Route path="/jwellery/bracelets" element={<Bracelet/>}></Route>
      <Route path="/jwellery/aarams" element={<Aram/>}></Route>
      <Route path="/jwellery/necklace" element={<Necklace/>}></Route>
      <Route path="/jwellery/earings" element={<Earing/>}></Route>
      <Route path="/jwellery/bangles" element={<Bangle/>}></Route>
      <Route path="/jwellery/rings" element={<Ring/>}></Route>
      <Route path="/gallery" element={<Gallery/>}></Route>
      <Route path='/about' element={<AboutUS />} />
      <Route path='/contact' element={<ContactPage/>}></Route>
      


     
    </Routes>
  </BrowserRouter>
);