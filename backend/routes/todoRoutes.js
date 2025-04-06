const express = require('express');
const Todo = require('../models/Todo');
const authenticateToken = require('../middleware/authMiddleware');
const router = express.Router();

// Get all todos for the logged-in user
router.get('/', authenticateToken, async (req, res) => {
  try {
    const todos = await Todo.find({ userId: req.userId });
    res.json(todos);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching todos' });
  }
});

// Add new todo
router.post('/', authenticateToken, async (req, res) => {
  try {
    const { task } = req.body;
    const newTodo = new Todo({ task, userId: req.userId });
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (err) {
    res.status(500).json({ message: 'Error adding todo' });
  }
});

// Update a todo
router.put('/:id', authenticateToken, async (req, res) => {
  try {
    const updatedTodo = await Todo.findOneAndUpdate(
      { _id: req.params.id, userId: req.userId },
      { task: req.body.task },
      { new: true }
    );
    if (!updatedTodo) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    res.json(updatedTodo);
  } catch (err) {
    res.status(500).json({ message: 'Error updating todo' });
  }
});

// Delete a todo
router.delete('/:id', authenticateToken, async (req, res) => {
  try {
    await Todo.deleteOne({ _id: req.params.id, userId: req.userId });
    res.json({ message: 'Todo deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting todo' });
  }
});

module.exports = router;
