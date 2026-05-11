const express = require('express');
const router = express.Router();

router.post('/calculate', (req, res) => {
  res.json({ message: 'Calculate emissions endpoint' });
});

router.get('/:mineId', (req, res) => {
  res.json({ message: 'Get emissions endpoint' });
});

router.post('/:mineId/history', (req, res) => {
  res.json({ message: 'Get emission history endpoint' });
});

module.exports = router;
