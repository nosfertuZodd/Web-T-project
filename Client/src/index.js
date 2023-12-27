import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css';
import AdminDashBoard from './routes/AdminRoutes';
import ClientDashBoard from './routes/ClientRoutes';
import YoutuberDashBoard from './routes/Youtuber';
import Signup from './scenes/signup';
import Login from './scenes/login';
import About from './scenes/basic/about-us'
import Contact from './scenes/basic/contact-us'
import Services from './scenes/basic/services'
import Home from './scenes/basic/home'
import NotFound from './scenes/404Page'
import PostJob from './scenes/Client_Post_job'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>

        <Route exact path="/" element={<Home />} />
  
        {/* Youtuber Routes */}
        <Route path="/youtuber/*" element={<PostJob />} />

        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />

        <Route path="*" element={<NotFound />} />

    </Routes>
  </BrowserRouter>
);

