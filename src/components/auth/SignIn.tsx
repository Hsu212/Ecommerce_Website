// src/components/auth/SignIn.tsx
import React, { useState } from 'react';

interface Props {
  onSuccess: () => void;
}

const SignIn: React.FC<Props> = ({ onSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // DUMMY – will be replaced by Supabase later
    alert(`Sign-In dummy:\nEmail: ${email}\nPassword: ${password}`);
    onSuccess();          // show profile
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