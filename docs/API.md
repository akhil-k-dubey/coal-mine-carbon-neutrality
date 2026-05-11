# Coal Mine Carbon Neutrality - API Documentation

## Base URL
```
http://localhost:5000/api/v1
```

## Authentication
All endpoints (except login/register) require JWT Bearer token in Authorization header:
```
Authorization: Bearer <token>
```

## API Endpoints

### Authentication

#### Register User
```
POST /auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "secure_password",
  "name": "User Name",
  "organization": "Coal Mining Company"
}

Response: 201 Created
{
  "id": 1,
  "email": "user@example.com",
  "name": "User Name",
  "token": "jwt_token_here"
}
```

#### Login
```
POST /auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "secure_password"
}

Response: 200 OK
{
  "token": "jwt_token_here",
  "user": {
    "id": 1,
    "email": "user@example.com",
    "name": "User Name"
  }
}
```

### Mines

#### Register a Mine
```
POST /mines
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "Alpha Coal Mine",
  "type": "open-cast",
  "location": "Odisha",
  "state": "Odisha",
  "annual_capacity": 5000000,
  "latitude": 22.5597,
  "longitude": 85.2818
}

Response: 201 Created
{
  "id": 1,
  "name": "Alpha Coal Mine",
  "type": "open-cast",
  "location": "Odisha",
  "registration_date": "2026-05-11"
}
```

#### Get All Mines
```
GET /mines
Authorization: Bearer <token>

Response: 200 OK
[
  {
    "id": 1,
    "name": "Alpha Coal Mine",
    "type": "open-cast",
    "location": "Odisha",
    "state": "Odisha",
    "annual_capacity": 5000000
  }
]
```

#### Get Mine by ID
```
GET /mines/:id
Authorization: Bearer <token>

Response: 200 OK
{
  "id": 1,
  "name": "Alpha Coal Mine",
  "type": "open-cast",
  "location": "Odisha",
  "state": "Odisha",
  "annual_capacity": 5000000,
  "latitude": 22.5597,
  "longitude": 85.2818,
  "registration_date": "2026-05-11",
  "is_active": true
}
```

#### Update Mine
```
PUT /mines/:id
Authorization: Bearer <token>
Content-Type: application/json

{
  "annual_capacity": 6000000,
  "is_active": true
}

Response: 200 OK
```

#### Delete Mine
```
DELETE /mines/:id
Authorization: Bearer <token>

Response: 204 No Content
```

### Emissions

#### Calculate Emissions
```
POST /emissions/calculate
Authorization: Bearer <token>
Content-Type: application/json

{
  "mine_id": 1,
  "activities": [
    {
      "activity_type": "excavation",
      "quantity": 1000,
      "unit": "tonnes",
      "activity_date": "2026-05-11"
    },
    {
      "activity_type": "transportation",
      "quantity": 500,
      "unit": "km-tonnes",
      "activity_date": "2026-05-11"
    }
  ]
}

Response: 200 OK
{
  "mine_id": 1,
  "total_emissions": 287.50,
  "emission_breakdown": {
    "excavation": 150,
    "transportation": 137.50
  },
  "calculated_at": "2026-05-11T10:30:00Z"
}
```

#### Get Emissions for Mine
```
GET /emissions/:mineId
Authorization: Bearer <token>

Response: 200 OK
[
  {
    "id": 1,
    "month": "2026-05-01",
    "excavation_emissions": 1500,
    "transportation_emissions": 2000,
    "equipment_emissions": 1200,
    "processing_emissions": 800,
    "total_emissions": 5500,
    "per_capita_emissions": 2.75
  }
]
```

#### Get Emission History
```
POST /emissions/:mineId/history
Authorization: Bearer <token>
Content-Type: application/json

{
  "start_date": "2026-01-01",
  "end_date": "2026-05-11"
}

Response: 200 OK
[
  {
    "month": "2026-01-01",
    "total_emissions": 4800
  },
  {
    "month": "2026-02-01",
    "total_emissions": 5100
  }
]
```

### Pathways to Carbon Neutrality

#### Simulate Pathways
```
POST /pathways/simulate
Authorization: Bearer <token>
Content-Type: application/json

{
  "mine_id": 1,
  "strategies": [
    {
      "type": "electric-vehicles",
      "intensity": 0.5
    },
    {
      "type": "renewable-energy",
      "intensity": 1.0
    },
    {
      "type": "afforestation",
      "intensity": 0.8
    },
    {
      "type": "methane-capture",
      "intensity": 0.6
    }
  ]
}

Response: 200 OK
{
  "baseline_emissions": 12500,
  "simulated_pathways": [
    {
      "strategy": "electric-vehicles",
      "estimated_reduction": 1875,
      "implementation_cost": 500000,
      "timeline_months": 12
    },
    {
      "strategy": "renewable-energy",
      "estimated_reduction": 3125,
      "implementation_cost": 2000000,
      "timeline_months": 18
    },
    {
      "strategy": "afforestation",
      "estimated_reduction": 2500,
      "implementation_cost": 150000,
      "timeline_months": 24
    },
    {
      "strategy": "methane-capture",
      "estimated_reduction": 750,
      "implementation_cost": 800000,
      "timeline_months": 12
    }
  ],
  "combined_reduction": 8250,
  "remaining_emissions": 4250,
  "estimated_years_to_neutrality": 3.4,
  "total_implementation_cost": 3450000
}
```

#### Get Pathways for Mine
```
GET /pathways/:mineId
Authorization: Bearer <token>

Response: 200 OK
[
  {
    "id": 1,
    "pathway_name": "Green Transition Plan 2026",
    "strategy_type": "renewable-energy",
    "baseline_emissions": 12500,
    "estimated_reduction": 3125,
    "estimated_years_to_neutrality": 2.5,
    "status": "planning"
  }
]
```

### Dashboard

#### Get Dashboard Data
```
GET /dashboard/:mineId
Authorization: Bearer <token>

Response: 200 OK
{
  "mine": {
    "id": 1,
    "name": "Alpha Coal Mine",
    "type": "open-cast"
  },
  "current_metrics": {
    "total_emissions": 12500,
    "total_sinks": 5200,
    "gap_to_neutrality": 7300,
    "reduction_percentage": 35
  },
  "trends": [
    {
      "month": "2026-01-01",
      "emissions": 12000,
      "sinks": 4800
    },
    {
      "month": "2026-02-01",
      "emissions": 12300,
      "sinks": 4900
    }
  ],
  "top_emission_sources": [
    {
      "source": "transportation",
      "percentage": 35
    },
    {
      "source": "equipment",
      "percentage": 25
    }
  ]
}
```

#### Get Detailed Metrics
```
GET /dashboard/:mineId/metrics
Authorization: Bearer <token>

Response: 200 OK
{
  "monthly_emissions": [...],
  "yearly_emissions": [...],
  "carbon_sinks_breakdown": [...],
  "pathway_progress": [...]
}
```

### Carbon Credits

#### Estimate Carbon Credits
```
POST /carbon-credits/estimate
Authorization: Bearer <token>
Content-Type: application/json

{
  "mine_id": 1,
  "emissions_reduced": 5000,
  "verification_method": "third-party-audit"
}

Response: 200 OK
{
  "credit_amount": 5000,
  "market_rate": 15.50,
  "total_value": 77500,
  "currency": "USD",
  "estimated_date": "2026-05-11"
}
```

#### Get Carbon Credits for Mine
```
GET /carbon-credits/:mineId
Authorization: Bearer <token>

Response: 200 OK
[
  {
    "id": 1,
    "credit_amount": 5000,
    "market_rate": 15.50,
    "total_value": 77500,
    "status": "verified",
    "certification_date": "2026-05-11"
  }
]
```

## Error Responses

### 400 Bad Request
```json
{
  "error": "Invalid request parameters",
  "details": {
    "field": "mine_type",
    "message": "Must be 'underground' or 'open-cast'"
  }
}
```

### 401 Unauthorized
```json
{
  "error": "Missing or invalid authentication token"
}
```

### 403 Forbidden
```json
{
  "error": "You don't have permission to access this resource"
}
```

### 404 Not Found
```json
{
  "error": "Resource not found",
  "resource": "mine",
  "id": 999
}
```

### 500 Internal Server Error
```json
{
  "error": "Internal server error",
  "request_id": "req_12345"
}
```

## Rate Limiting
- 1000 requests per hour per API key
- Headers returned: `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset`

## Pagination
For endpoints returning lists:
```
GET /mines?page=1&per_page=20

Response headers:
{
  "X-Total-Count": 100,
  "X-Page": 1,
  "X-Per-Page": 20,
  "X-Total-Pages": 5
}
```
