// API endpoints will be defined here.

const express = require('express');
const router = express.Router();

// Define routes
router.post('/api/invoices/analyze', (req, res) => {
    res.status(200).json({ message: 'Invoice analyzed successfully', confidence: 0.9 });
});

module.exports = router;
