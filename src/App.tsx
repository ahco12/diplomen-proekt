import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import HomePage from './pages/HomePage';
import StorePage from './pages/StorePage';
import Minigame from './pages/GamePage';
import Register from './pages/login-register/RegistrationPage';
import Login from './pages/login-register/LoginPage';
import ProtectedRoute from './components/ProtectedRoute';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path='/store' element={<StorePage />} />
          {/* Wrap protected route inside ProtectedRoute */}
          <Route path="/minigame" element={<ProtectedRoute element={<Minigame />} />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;

