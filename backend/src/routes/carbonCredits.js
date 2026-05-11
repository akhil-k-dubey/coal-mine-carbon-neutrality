const express = require('express');
const router = express.Router();

router.post('/estimate', (req, res) => {
  res.json({ message: 'Estimate carbon credits endpoint' });
});

router.get('/:mineId', (req, res) => {
  res.json({ message: 'Get carbon credits endpoint' });
});

module.exports = router;
