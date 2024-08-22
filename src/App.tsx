import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import RoomPage from './pages/RoomPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/room/:id" element={<RoomPage />} />
      </Routes>
    </Router>
  );
};

export default App;
