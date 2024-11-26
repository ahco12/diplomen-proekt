import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleGoToMinigame = () => {
    if (!user) {
      alert('You need to log in or create an account first!');
      navigate('/register');  // Redirect to login if not authenticated
    } else {
      navigate('/minigame');  // Proceed to minigame if authenticated
    }
  };

  const handleGoToStore = () => {
    navigate('/store');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const handleRegister = () => {
    navigate('/register');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 relative">
      {/* Login and Register buttons at the top right */}
      <div className="absolute top-4 right-4 flex space-x-4">
        <button
          onClick={handleLogin}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Login
        </button>
        <button
          onClick={handleRegister}
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
        >
          Register
        </button>
      </div>

      {/* Main Content */}
      <h1 className="text-4xl font-bold mb-8 text-center">Hello and welcome to our game!</h1>
      <div className="flex space-x-4">
        <button
          onClick={handleGoToMinigame}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition"
        >
          Go to Minigame
        </button>
        <button
          onClick={handleGoToStore}
          className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 transition"
        >
          Go to Store
        </button>
      </div>
    </div>
  );
};

export default HomePage;

