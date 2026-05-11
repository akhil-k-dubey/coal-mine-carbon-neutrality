const express = require('express');
const router = express.Router();

router.post('/simulate', (req, res) => {
  res.json({ message: 'Simulate pathways endpoint' });
});

router.get('/:mineId', (req, res) => {
  res.json({ message: 'Get pathways endpoint' });
});

module.exports = router;
