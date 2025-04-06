// ✅ Login.js - Updated
import React, { useState } from 'react';
import { login } from '../services/api';

function Login({ onLogin }) {
  const [form, setForm] = useState({ username: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.username || !form.password) {
      alert('Please enter both username and password.');
      return;
    }

    try {
      const data = await login(form.username, form.password);
      localStorage.setItem('token', data.token);
      onLogin();
    } catch (err) {
      console.error(err);
      alert(err.message || 'Login failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input
        placeholder="Username"
        value={form.username}
        onChange={(e) => setForm({ ...form, username: e.target.value })}
      />
      <input
        placeholder="Password"
        type="password"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
