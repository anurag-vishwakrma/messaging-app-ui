import React, { useState } from 'react';
import { login } from '../../services/authService';
import { useNavigate } from 'react-router-dom';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await login({ email, password });
      localStorage.setItem('token', res.token);
      alert('Login successful!');
      navigate('/');
    } catch (error: unknown) {
      alert('Login failed: Invalid credentials or server error.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-80 mx-auto mt-20">
      <h2 className="text-xl font-bold">Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 rounded"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 rounded"
        required
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
