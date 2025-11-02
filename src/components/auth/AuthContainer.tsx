import React, { useState } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import '../../styles/Auth.css';

const AuthContainer: React.FC = () => {
  const [isSignIn, setIsSignIn] = useState(true);

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

        {isSignIn ? <SignIn /> : <SignUp />}
      </div>
    </div>
  );
};

export default AuthContainer;
