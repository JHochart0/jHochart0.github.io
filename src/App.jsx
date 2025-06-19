import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

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
