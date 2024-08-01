import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import CreateLeague from './pages/CreateLeague/CreateLeague';
import Draft from './pages/Draft/Draft';
import Profile from './pages/Profile/Profile';
import Logout from './pages/Logout/Logout';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create-league" element={<CreateLeague />} />
          <Route path="/draft" element={<Draft />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
