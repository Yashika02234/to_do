// src/components/TodoList.js
import React, { useEffect, useState } from 'react';
import API from '../services/api';
import { Pencil, Trash2, Plus } from 'lucide-react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');
  const [editId, setEditId] = useState(null);

  const fetchTodos = async () => {
    try {
      const res = await API.get('/todos');
      setTodos(res.data);
    } catch (err) {
      console.error('Error fetching todos:', err);
    }
  };

  const addOrUpdateTodo = async () => {
    if (!task.trim()) return;

    try {
      if (editId) {
        await API.put(`/todos/${editId}`, { task });
        setEditId(null);
      } else {
        await API.post('/todos', { task });
      }
      setTask('');
      fetchTodos();
    } catch (err) {
      console.error('Error adding/updating todo:', err);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await API.delete(`/todos/${id}`);
      fetchTodos();
    } catch (err) {
      console.error('Error deleting todo:', err);
    }
  };

  const startEdit = (todo) => {
    setEditId(todo._id);
    setTask(todo.task);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="bg-white rounded-lg p-6 shadow">
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <input
          type="text"
          placeholder="What do you want to do?"
          className="flex-grow border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          onClick={addOrUpdateTodo}
          className="flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          <Plus className="w-5 h-5 mr-1" />
          {editId ? 'Update' : 'Add'}
        </button>
      </div>

      {todos.length === 0 ? (
        <div className="text-gray-500 text-center mt-12 text-lg animate-pulse">
          No tasks yet. Add something to do! ✨
        </div>
      ) : (
        <ul className="space-y-3">
          {todos.map((todo) => (
            <li
              key={todo._id}
              className="flex justify-between items-center border px-4 py-3 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <span className="text-gray-800">{todo.task}</span>
              <div className="flex gap-2">
                <button
                  onClick={() => startEdit(todo)}
                  className="text-blue-600 hover:text-blue-800 transition"
                  title="Edit"
                >
                  <Pencil className="w-5 h-5" />
                </button>
                <button
                  onClick={() => deleteTodo(todo._id)}
                  className="text-red-500 hover:text-red-700 transition"
                  title="Delete"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
