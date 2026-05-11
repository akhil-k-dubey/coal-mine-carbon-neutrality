const express = require('express');
const router = express.Router();

router.get('/:mineId', (req, res) => {
  res.json({ message: 'Get dashboard data endpoint' });
});

router.get('/:mineId/metrics', (req, res) => {
  res.json({ message: 'Get metrics endpoint' });
});

module.exports = router;
