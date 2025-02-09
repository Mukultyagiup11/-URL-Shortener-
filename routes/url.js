const express = require('express');
const { createShortUrl, redirectUrl } = require('../controllers/url');

const router = express.Router();

// POST /api/shorten
router.post('/', createShortUrl);

// GET /api/shorten/:alias
router.get('/:alias', redirectUrl);

module.exports = router;