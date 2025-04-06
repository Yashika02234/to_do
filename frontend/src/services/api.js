// src/services/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api',
});

// Attach token to every request if available
API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

// Auth: Register
export const register = async (username, password) => {
  try {
    const res = await API.post('/auth/register', { username, password });
    return res.data;
  } catch (err) {
    throw err.response?.data || { message: 'Registration failed' };
  }
};

// Auth: Login
export const login = async (username, password) => {
  try {
    const res = await API.post('/auth/login', { username, password });
    return res.data;
  } catch (err) {
    throw err.response?.data || { message: 'Login failed' };
  }
};

// Todos: Add Todo
export const addTodo = async (task) => {
  const res = await API.post('/todos', { task });
  return res.data;
};

// Todos: Get Todos
export const getTodos = async () => {
  const res = await API.get('/todos');
  return res.data;
};

// Todos: Delete Todo
export const deleteTodo = async (id) => {
  const res = await API.delete(`/todos/${id}`);
  return res.data;
};

export default API;
