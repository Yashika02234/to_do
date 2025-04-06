const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Root test route
app.get('/', (req, res) => {
  res.send('Welcome to the Todo API!');
});

// Routes
const todoRoutes = require('./routes/todoRoutes');
const authRoutes = require('./routes/authRoutes');

app.use('/api/todos', todoRoutes);
app.use('/api/auth', authRoutes);

// Connect to MongoDB and start server
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ Connected to MongoDB');
    app.listen(5000, () =>
      console.log('🚀 Server running on http://localhost:5000')
    );
  })
  .catch((err) => console.error('❌ MongoDB connection failed:', err));
