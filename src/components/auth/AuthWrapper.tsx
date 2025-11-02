import React from 'react';
import AuthContainer from './AuthContainer';
import Profile from '../../pages/Profile';

const AuthWrapper: React.FC = () => {
  const user = JSON.parse(localStorage.getItem('user') || 'null');

  return user ? <Profile /> : <AuthContainer />;
};

export default AuthWrapper;
