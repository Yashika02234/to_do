// ✅ Register.js - Updated
import React, { useState } from 'react';
import { register } from '../services/api';

function Register() {
  const [form, setForm] = useState({ username: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.username || !form.password) {
      alert('Please enter both username and password.');
      return;
    }

    try {
      await register(form.username, form.password);
      alert('Registered successfully! Now you can login.');
    } catch (err) {
      console.error(err);
      alert(err.message || 'Registration failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
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
      <button type="submit">Register</button>
    </form>
  );
}

export default Register;
