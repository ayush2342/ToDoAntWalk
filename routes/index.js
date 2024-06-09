const express = require('express');
const router = express.Router();
const authRoutes = require('./authRoutes');
const todoRoutes = require('./todoRoutes');

router.use('/auth', authRoutes);
router.use('/api', todoRoutes);

module.exports = router;
