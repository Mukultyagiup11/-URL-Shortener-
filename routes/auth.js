const express = require('express');
const { googleLogin } = require('../controllers/auth');

const router = express.Router();

// POST /api/auth/login
router.post('/login', googleLogin);

module.exports = router;