// src/components/auth/SignUp.tsx
import React, { useState } from 'react';

interface Props {
  onSuccess: () => void;
}

const SignUp: React.FC<Props> = ({ onSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirm) {
      alert('Passwords do not match');
      return;
    }
    // DUMMY – will be replaced by Supabase later
    alert(`Sign-Up dummy:\nEmail: ${email}\nPassword: ${password}`);
    onSuccess();          // show profile
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
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
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirm}
        onChange={(e) => setConfirm(e.target.value)}
        required
      />
      <button type="submit">Create Account</button>
    </form>
  );
};

export default SignUp;