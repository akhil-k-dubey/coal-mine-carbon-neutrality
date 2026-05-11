# Architecture Documentation

## System Overview

The Coal Mine Carbon Neutrality application is a full-stack web application designed to help coal mines in India quantify their carbon footprint and develop pathways to achieve carbon neutrality.

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                        Client Layer (React)                      │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐            │
│  │  Dashboard   │ │  Calculator  │ │  Analytics   │            │
│  └──────────────┘ └──────────────┘ └──────────────┘            │
└─────────────────────────────────────────────────────────────────┘
                           ↓ (HTTP/REST)
┌─────────────────────────────────────────────────────────────────┐
│                 API Gateway (Express.js)                         │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  Authentication │ Validation │ Rate Limiting │ Logging   │  │
│  └──────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
  ↓              ↓              ↓              ↓
┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐
│  Auth    │ │  Mines   │ │Emissions │ │ Pathways │
│ Routes   │ │ Routes   │ │ Routes   │ │ Routes   │
└──────────┘ └──────────┘ └──────────┘ └──────────┘
         ↓ (Business Logic)
┌─────────────────────────────────────────────────────────────────┐
│              Service & Business Logic Layer                      │
│  ├─ Auth Service       ├─ Mine Service        ├─ Cache Service  │
│  ├─ Emission Service   ├─ Carbon Credit Svc   ├─ Email Service  │
│  └─ Pathway Service    └─ Analytics Service   └─ Report Service │
└─────────────────────────────────────────────────────────────────┘
         ↓                                          ↓
┌──────────────────────────┐          ┌──────────────────────┐
│   PostgreSQL Database    │          │   Redis Cache        │
│  ├─ Users               │          │  ├─ Sessions        │
│  ├─ Mines               │          │  ├─ Metrics Cache   │
│  ├─ Emissions           │          │  └─ Calculations    │
│  ├─ Carbon Sinks        │          └──────────────────────┘
│  ├─ Pathways            │
│  ├─ Carbon Credits      │
│  └─ Audit Logs          │
└──────────────────────────┘
```

## Technology Stack

### Frontend
- **Framework**: React 18.x
- **State Management**: Redux Toolkit
- **Routing**: React Router v6
- **Charting**: Recharts, Chart.js
- **Maps**: Leaflet.js
- **Form Handling**: React Hook Form + Zod
- **Styling**: Tailwind CSS
- **HTTP Client**: Axios

### Backend
- **Runtime**: Node.js 18.x
- **Framework**: Express.js
- **Authentication**: JWT (jsonwebtoken)
- **Password Hashing**: bcryptjs
- **Validation**: express-validator
- **API Documentation**: Swagger/OpenAPI
- **Logging**: Pino
- **CORS**: CORS middleware
- **Security**: Helmet.js

### Database
- **Primary**: PostgreSQL 14
- **Cache**: Redis 7
- **Connection Pool**: pg (PostgreSQL client)

### DevOps
- **Containerization**: Docker & Docker Compose
- **CI/CD**: GitHub Actions (planned)
- **Hosting**: AWS / Heroku
- **Package Manager**: npm

## Data Model

### Core Entities

```
User
├── id (PK)
├── email (UNIQUE)
├── password_hash
├── name
├── organization
├── role
└── timestamps

Mine (belongs to User)
├── id (PK)
├── user_id (FK)
├── name
├── type (underground/open-cast)
├── location
├── state
├── annual_capacity
├── coordinates (lat/long)
└── timestamps

Mining Activity (belongs to Mine)
├── id (PK)
├── mine_id (FK)
├── activity_type
├── quantity
├── unit
├── emission_factor
├── calculated_emissions
├── activity_date
└── timestamps

Emission Record (belongs to Mine)
├── id (PK)
├── mine_id (FK)
├── month
├── excavation_emissions
├── transportation_emissions
├── equipment_emissions
├── processing_emissions
├── total_emissions (computed)
├── per_capita_emissions
└── timestamps

Carbon Sink (belongs to Mine)
├── id (PK)
├── mine_id (FK)
├── sink_type
├── area_hectares
├── tree_species
├── annual_co2_sequestration
└── timestamps

Neutrality Pathway (belongs to Mine)
├── id (PK)
├── mine_id (FK)
├── pathway_name
├── strategy_type
├── estimated_reduction
├── implementation_timeline
├── estimated_years_to_neutrality
└── timestamps

Carbon Credit (belongs to Mine)
├── id (PK)
├── mine_id (FK)
├── credit_amount
├── market_rate
├── total_value (computed)
├── verification_method
├── status
└── timestamps
```

## API Design Principles

1. **RESTful**: Follows REST conventions with proper HTTP methods and status codes
2. **Versioned**: APIs prefixed with `/api/v1` for backward compatibility
3. **Authenticated**: JWT bearer token required for all protected endpoints
4. **Paginated**: List endpoints support pagination parameters
5. **Documented**: OpenAPI/Swagger documentation available at `/api/docs`
6. **Validated**: Input validation on all endpoints
7. **Logged**: Request/response logging for debugging and audit trails

## Security Measures

1. **Authentication**: JWT-based authentication
2. **Authorization**: Role-based access control (RBAC)
3. **Encryption**: HTTPS/TLS for data in transit
4. **Hashing**: bcryptjs for password hashing
5. **Validation**: Input sanitization and validation
6. **CORS**: Configured CORS protection
7. **Helmet**: Security headers via Helmet.js
8. **Rate Limiting**: API rate limiting (planned)
9. **SQL Injection**: Parameterized queries prevent SQL injection
10. **Audit Logs**: Track all user actions for compliance

## Scalability Considerations

1. **Database**: 
   - Indexes on frequently queried columns
   - Connection pooling for performance
   - Materialized views for complex analytics

2. **Caching**:
   - Redis for session and metrics caching
   - Cache invalidation strategies

3. **API Design**:
   - Stateless design for horizontal scaling
   - Asynchronous task processing (planned)
   - Microservices-ready architecture

4. **Frontend**:
   - Code splitting and lazy loading
   - Asset compression and optimization
   - CDN for static content (planned)

## Deployment Architecture

```
┌──────────────────────────────────────┐
│  AWS / Cloud Provider                │
│  ┌────────────────────────────────┐  │
│  │  Load Balancer                 │  │
│  └──────────────┬─────────────────┘  │
│                 │                     │
│   ┌─────────────┼─────────────┐      │
│   ↓             ↓             ↓      │
│ ┌──────┐   ┌──────┐      ┌──────┐   │
│ │React │   │React │  ... │React │   │ (Auto-scaling)
│ │ App  │   │ App  │      │ App  │   │
│ └──┬───┘   └──┬───┘      └──┬───┘   │
│    │          │             │       │
│ ┌──────────────┼─────────────┐      │
│ │  API Load Balancer         │      │
│ └──────────────┬─────────────┘      │
│    ┌───────────┼───────────┐        │
│    ↓           ↓           ↓        │
│ ┌──────┐  ┌──────┐    ┌──────┐     │
│ │ API  │  │ API  │ .. │ API  │     │ (Auto-scaling)
│ │Node1 │  │Node2 │    │NodeN │     │
│ └──────┘  └──────┘    └──────┘     │
│    │         │          │          │
│    └─────────┼──────────┘          │
│              ↓                      │
│    ┌──────────────────┐            │
│    │  RDS PostgreSQL  │            │ (Multi-AZ)
│    └──────────────────┘            │
│              ↓                      │
│    ┌──────────────────┐            │
│    │  ElastiCache     │            │ (Redis Cluster)
│    │  (Redis)         │            │
│    └──────────────────┘            │
└──────────────────────────────────────┘
```

## Development Workflow

1. **Local Development**: Docker Compose for local environment
2. **Version Control**: Git with feature branches
3. **Testing**: Unit tests (Jest) + E2E tests (Cypress)
4. **Code Quality**: ESLint + Prettier for code formatting
5. **CI/CD**: GitHub Actions for automated testing and deployment
6. **Monitoring**: Logs and metrics collection (planned)

## Future Enhancements

1. **Real-time Analytics**: WebSockets for live data updates
2. **Mobile App**: React Native for iOS/Android
3. **AI/ML**: Predictive emissions modeling
4. **IoT Integration**: Real-time sensor data from mines
5. **Advanced Reporting**: PDF/Excel export capabilities
6. **GIS Integration**: Advanced mapping and spatial analysis
7. **Blockchain**: Carbon credit verification and trading
8. **Multi-language Support**: Internationalization (i18n)
