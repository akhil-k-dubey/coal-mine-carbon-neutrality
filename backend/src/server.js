const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const mineRoutes = require('./routes/mines');
const emissionRoutes = require('./routes/emissions');
const pathwayRoutes = require('./routes/pathways');
const dashboardRoutes = require('./routes/dashboard');
const carbonCreditRoutes = require('./routes/carbonCredits');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(helmet());
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/mines', mineRoutes);
app.use('/api/v1/emissions', emissionRoutes);
app.use('/api/v1/pathways', pathwayRoutes);
app.use('/api/v1/dashboard', dashboardRoutes);
app.use('/api/v1/carbon-credits', carbonCreditRoutes);

app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

module.exports = app;
