# Coal Mine Carbon Neutrality Application

A comprehensive full-stack web application designed to help Indian coal mines quantify their carbon footprint and evaluate pathways to achieve carbon neutrality.

## 🎯 Objectives

- **Activity-wise Carbon Emission Quantification** - Estimate emissions from excavation, transportation, and equipment usage
- **Carbon Sink Estimation** - Calculate existing carbon sinks and afforestation potential
- **Gap Analysis** - Identify the gap between emissions and sinks with actionable neutrality pathways
- **Carbon Neutrality Pathways** - Simulate different strategies including clean technologies, renewable energy, and afforestation
- **Carbon Credit Estimation** - Calculate potential carbon credits at current market rates
- **Data Visualization** - Track trends and monitor emission reduction effectiveness

## 🏗️ Technology Stack

### Frontend
- **Framework**: React 18.x
- **State Management**: Redux Toolkit
- **Visualization**: Chart.js / D3.js
- **Styling**: Tailwind CSS
- **Maps**: Leaflet.js (for afforestation site mapping)

### Backend
- **Framework**: Node.js with Express.js
- **Database**: PostgreSQL
- **Authentication**: JWT-based
- **API Documentation**: Swagger/OpenAPI
- **Caching**: Redis

### DevOps & Deployment
- **Containerization**: Docker & Docker Compose
- **CI/CD**: GitHub Actions
- **Hosting**: AWS / Heroku

## 📁 Project Structure

```
coal-mine-carbon-neutrality/
├── frontend/                          # React application
│   ├── src/
│   │   ├── components/               # Reusable UI components
│   │   ├── pages/                    # Page components
│   │   ├── store/                    # Redux store
│   │   ├── services/                 # API services
│   │   ├── utils/                    # Utility functions
│   │   ├── App.js
│   │   └── index.js
│   ├── public/
│   ├── package.json
│   └── .env.example
│
├── backend/                           # Node.js API
│   ├── src/
│   │   ├── routes/                   # API routes
│   │   ├── controllers/              # Route controllers
│   │   ├── models/                   # Database models
│   │   ├── middleware/               # Custom middleware
│   │   ├── utils/                    # Utility functions
│   │   ├── config/                   # Configuration files
│   │   └── server.js
│   ├── database/
│   │   └── migrations/               # Database migrations
│   ├── tests/
│   ├── package.json
│   └── .env.example
│
├── database/
│   ├── schemas/                      # Database schemas
│   └── seed-data/                    # Initial data
│
├── docs/
│   ├── API.md                        # API documentation
│   ├── ARCHITECTURE.md               # System architecture
│   ├── SETUP.md                      # Setup instructions
│   └── EMISSION_FACTORS.md           # Emission factor guidelines
│
├── docker-compose.yml
├── .gitignore
├── .env.example
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js 16.x or higher
- PostgreSQL 12.x or higher
- Docker & Docker Compose (optional)
- npm or yarn

### Installation

#### Using Docker Compose (Recommended)
```bash
git clone https://github.com/akhil-k-dubey/coal-mine-carbon-neutrality.git
cd coal-mine-carbon-neutrality

# Copy environment files
cp .env.example .env
cp frontend/.env.example frontend/.env
cp backend/.env.example backend/.env

# Start all services
docker-compose up -d

# Initialize database
docker-compose exec backend npm run migrate
docker-compose exec backend npm run seed

# Access the application
# Frontend: http://localhost:3000
# Backend API: http://localhost:5000
# API Docs: http://localhost:5000/api/docs
```

#### Manual Setup

**Backend Setup:**
```bash
cd backend
npm install
cp .env.example .env
npm run migrate
npm run seed
npm start
```

**Frontend Setup:**
```bash
cd frontend
npm install
cp .env.example .env
npm start
```

## 📊 Core Features

### 1. Emission Calculator
- Input mining activities (excavation, transportation, equipment usage)
- Automatic emission calculation based on established emission factors
- Support for different mine types (underground, open-cast)
- Historical tracking of emissions

### 2. Carbon Sink Estimation
- Calculate existing carbon sinks in mine operations
- Estimate afforestation potential
- State-specific tree plantation plans
- Carbon sequestration rates by tree species

### 3. Neutrality Pathways
- **Clean Technologies**
  - Electric vehicle impact analysis
  - Methane capture system efficiency
  - Renewable energy integration (solar, wind)
- **Afforestation Offsets**
  - Land requirement calculations
  - Species selection based on geography
  - Timeline to carbon neutrality
- **Carbon Credits**
  - Estimation at current market rates
  - Trading opportunity analysis

### 4. Analytics Dashboard
- Real-time emission tracking
- Gap analysis visualization
- Progress towards carbon neutrality
- Strategy effectiveness comparison
- Per-capita emission metrics

### 5. Data Management
- Import/export capabilities (CSV, Excel)
- Data validation and quality checks
- Audit trails for compliance
- Multi-user access with role-based permissions

## 🔐 Security Features

- JWT-based authentication
- Role-based access control (RBAC)
- Input validation and sanitization
- HTTPS/TLS encryption
- Database encryption for sensitive data
- CORS protection

## 📈 Scalability

- Support for mines of all sizes
- Microservices-ready architecture
- Horizontal scaling with load balancing
- Caching layer for performance
- Database optimization for large datasets

## 🧪 Testing

```bash
# Backend tests
cd backend
npm test

# Frontend tests
cd frontend
npm test

# E2E tests
npm run e2e
```

## 📚 API Documentation

Comprehensive API documentation available at `/api/docs` when the backend is running.

Key Endpoints:
- `POST /api/v1/mines` - Register a new mine
- `POST /api/v1/emissions/calculate` - Calculate emissions
- `GET /api/v1/emissions/:mineId` - Get emission records
- `POST /api/v1/pathways/simulate` - Simulate neutrality pathways
- `GET /api/v1/carbon-credits/estimate` - Estimate carbon credits
- `GET /api/v1/dashboard/:mineId` - Get dashboard data

## 🌱 Environmental Impact

This application directly supports:
- India's climate change commitments
- UN Sustainable Development Goals (SDG 13 - Climate Action)
- National Determined Contributions (NDC)
- Transition to carbon-neutral mining operations

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:
1. Create a new branch for your feature
2. Write tests for new functionality
3. Submit a pull request with detailed description
4. Ensure CI/CD checks pass

## 📝 License

MIT License - see LICENSE file for details

## 📧 Support & Feedback

For questions or feedback, please open an issue on GitHub or contact the development team.

## 🎓 References

- [IPCC Guidelines for National Greenhouse Gas Inventories](https://www.ipcc-nggip.iges.or.jp/)
- [Indian Bureau of Mines Standards](https://ibm.gov.in/)
- [Ministry of Coal - India](https://coal.gov.in/)
- [National Mission for Enhanced Energy Efficiency](https://www.nmeeindia.org/)

---

**Last Updated**: May 2026  
**Version**: 1.0.0  
**Status**: Development
