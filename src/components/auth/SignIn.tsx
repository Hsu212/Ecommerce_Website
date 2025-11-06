// src/components/auth/SignIn.tsx
import React, { useState } from 'react';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  // Mock login
  const mockUser = { email, username: email.split('@')[0] };
  localStorage.setItem('user', JSON.stringify(mockUser));
  alert('Signed in successfully!');
  window.location.reload(); // Refresh to show profile
};

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>Sign In</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Sign In</button>
    </form>
  );
};

export default SignIn;