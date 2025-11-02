// src/components/auth/AuthContainer.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';   // ← ADD
import SignIn from './SignIn';
import SignUp from './SignUp';
import '../../styles/Auth.css';

const AuthContainer: React.FC = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const navigate = useNavigate();   // ← ADD

  const handleSuccess = () => {
    // Store dummy user in localStorage (for demo)
    const dummyUser = {
      username: 'demo_user',
      email: 'demo@example.com',
    };
    localStorage.setItem('user', JSON.stringify(dummyUser));
    
    // Redirect to real profile page
    navigate('/profile');
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-toggle">
          <button
            className={isSignIn ? 'active' : ''}
            onClick={() => setIsSignIn(true)}
          >
            Sign In
          </button>
          <button
            className={!isSignIn ? 'active' : ''}
            onClick={() => setIsSignIn(false)}
          >
            Sign Up
          </button>
        </div>

        {isSignIn ? (
          <SignIn onSuccess={handleSuccess} />
        ) : (
          <SignUp onSuccess={handleSuccess} />
        )}
      </div>
    </div>
  );
};

export default AuthContainer;
