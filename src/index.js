import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const container = document.getElementById('root');
const root = createRoot(container);

// 'Route'のパスを'/*'に設定することで、App内でのネストされたルートも適切に処理されるようにする。
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/*' element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>
);



