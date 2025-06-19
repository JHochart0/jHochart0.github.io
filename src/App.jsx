import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Home from './pages/Home.jsx';
import NotFound404 from './pages/NotFound404.jsx';

import './css/App.css';
function App() {
  return (
    <Router>
        <div className="App">
            <div className="content">
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="*" element={<NotFound404/>} />
                </Routes>
            </div>
        </div>
    </Router>
  );
}

export default App;
