import React, { useState } from 'react';
import { signup } from '../../services/authService';
import { useNavigate } from 'react-router-dom';

const SignupForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signup({ username, email, password });
      navigate('/login');
    } catch (error) {
      alert('Signup failed');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-80 mx-auto mt-20">
      <h2 className="text-xl font-bold">Signup</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        required
        onChange={(e) => setUsername(e.target.value)}
        className="border p-2 rounded"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        required
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        required
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 rounded"
      />
      <button type="submit" className="bg-green-500 text-white p-2 rounded">Signup</button>
    </form>
  );
};

export default SignupForm;
