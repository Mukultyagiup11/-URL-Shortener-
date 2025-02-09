const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const urlRoutes = require('./routes/url');
const rateLimit = require('./middleware/rateLimit');
const authMiddleware = require('./middleware/auth');

const app = express();
connectDB();

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/shorten', rateLimit, authMiddleware, urlRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));