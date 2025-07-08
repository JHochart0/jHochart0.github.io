import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import './css/App.css';

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import Skills from './pages/Skills.jsx';
import Contact from './pages/Contact.jsx';
import NotFound404 from './pages/NotFound404.jsx';
import EmailConfirmation from "./pages/EmailConfirmation.jsx";

import Header from './Components/Header.jsx';
import ScrollToTopButton from './Components/ScrollToTopButton.jsx';




function App() {
  return (
    <Router>
        <div className="App">
            <Header />
            <div className="content">
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/projects" element={<Projects/>} />
                    <Route path="/skills" element={<Skills/>} />
                    <Route path="/contact" element={<Contact/>} />
                    <Route path="/email-sent" element={<EmailConfirmation/>} />
                    <Route path="*" element={<NotFound404/>} />
                </Routes>
            </div>
            <ScrollToTopButton />
        </div>
    </Router>
  );
}

export default App;
