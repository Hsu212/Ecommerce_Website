import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Auth.css';

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user') || 'null');

  // Only redirect if NOT logged in
  useEffect(() => {
  if (!user) {
    navigate('/profile', { replace: true });
  }
}, [user, navigate]);

  // If no user, show nothing (redirect is in useEffect)
  if (!user) {
    return null;
  }

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/profile'); // back to login
  };

  return (
    <div className="auth-page">
      <div className="profile-container">
        <div className="profile-avatar">
          <div className="avatar-placeholder">
            {user.username.charAt(0).toUpperCase()}
          </div>
        </div>
        <h2>Welcome, {user.username}!</h2>
        <p className="profile-email">{user.email}</p>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};


export default Profile;
