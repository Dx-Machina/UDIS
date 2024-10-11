const express = require('express');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

// GET /api/profile
router.get('/', protect, (req, res) => {
  res.json({
    message: 'Welcome to your profile',
    user: req.user, // User info from JWT
  });
});

module.exports = router;

