# Setup Instructions

## Prerequisites

- Node.js 16.x or higher
- npm or yarn package manager
- PostgreSQL 12.x or higher
- Redis 6.x or higher
- Docker & Docker Compose (optional but recommended)
- Git

## Installation Methods

### Method 1: Using Docker Compose (Recommended)

#### Step 1: Clone the Repository
```bash
git clone https://github.com/akhil-k-dubey/coal-mine-carbon-neutrality.git
cd coal-mine-carbon-neutrality
```

#### Step 2: Configure Environment Variables
```bash
# Copy environment template
cp .env.example .env
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env

# Edit .env files with your configurations
vim .env
vim backend/.env
vim frontend/.env
```

#### Step 3: Start Services
```bash
# Start all services (PostgreSQL, Redis, Backend, Frontend)
docker-compose up -d

# View logs
docker-compose logs -f

# Initialize database
docker-compose exec backend npm run migrate
docker-compose exec backend npm run seed
```

#### Step 4: Access the Application
```
Frontend: http://localhost:3000
Backend API: http://localhost:5000
API Documentation: http://localhost:5000/api/docs
PostgreSQL: localhost:5432
Redis: localhost:6379
```

#### Step 5: Stop Services
```bash
docker-compose down

# Remove volumes (to clear database)
docker-compose down -v
```

### Method 2: Manual Installation

#### Step 1: Clone Repository
```bash
git clone https://github.com/akhil-k-dubey/coal-mine-carbon-neutrality.git
cd coal-mine-carbon-neutrality
```

#### Step 2: Install PostgreSQL

**On macOS (using Homebrew)**:
```bash
brew install postgresql@14
brew services start postgresql@14
```

**On Linux (Ubuntu/Debian)**:
```bash
sudo apt-get update
sudo apt-get install postgresql postgresql-contrib
sudo systemctl start postgresql
```

**On Windows**:
Download and run PostgreSQL installer from https://www.postgresql.org/download/windows/

#### Step 3: Install Redis

**On macOS**:
```bash
brew install redis
brew services start redis
```

**On Linux (Ubuntu/Debian)**:
```bash
sudo apt-get install redis-server
sudo systemctl start redis-server
```

**On Windows**:
Download from https://github.com/microsoftarchive/redis/releases

#### Step 4: Setup Backend
```bash
cd backend

# Copy environment file
cp .env.example .env

# Edit environment file
vim .env

# Install dependencies
npm install

# Create database
psql -U postgres -c "CREATE DATABASE coal_mine_carbon;"

# Run migrations
npm run migrate

# Seed initial data
npm run seed

# Start backend
npm run dev
```

#### Step 5: Setup Frontend (in new terminal)
```bash
cd frontend

# Copy environment file
cp .env.example .env

# Edit environment file
vim .env

# Install dependencies
npm install

# Start frontend
npm start
```

#### Step 6: Access Application
```
Frontend: http://localhost:3000
Backend API: http://localhost:5000
API Documentation: http://localhost:5000/api/docs
```

## Database Setup

### Create Database
```bash
psql -U postgres
CREATE DATABASE coal_mine_carbon;
\c coal_mine_carbon
```

### Run Migrations
```bash
cd backend
npm run migrate
```

### Seed Sample Data
```bash
npm run seed
```

## Testing

### Backend Tests
```bash
cd backend
npm test
npm run test:watch
```

### Frontend Tests
```bash
cd frontend
npm test
npm run test:watch
```

### E2E Tests
```bash
cd frontend
npm run e2e
```

## Development Workflow

### Code Quality
```bash
# Backend linting
cd backend
npm run lint
npm run lint:fix

# Frontend linting
cd frontend
npm run lint
npm run lint:fix
```

### Environment Variables

Create `.env` files in project root, backend, and frontend directories:

**Project Root (.env)**:
```env
NODE_ENV=development
DB_USER=coalmine
DB_PASSWORD=password123
DB_NAME=coal_mine_carbon
DB_HOST=localhost
DB_PORT=5432
REDIS_URL=redis://localhost:6379
JWT_SECRET=your-super-secret-key
```

**Backend (.env)**:
```env
NODE_ENV=development
PORT=5000
DB_USER=coalmine
DB_PASSWORD=password123
DB_NAME=coal_mine_carbon
DB_HOST=localhost
DB_PORT=5432
REDIS_URL=redis://localhost:6379
JWT_SECRET=your-super-secret-key
JWT_EXPIRE=7d
API_URL=http://localhost:5000
LOG_LEVEL=info
```

**Frontend (.env)**:
```env
REACT_APP_API_URL=http://localhost:5000
REACT_APP_ENV=development
REACT_APP_VERSION=1.0.0
```

## Troubleshooting

### Port Already in Use
```bash
# Find process using port 3000
lsof -i :3000

# Kill process
kill -9 <PID>

# Or change port in .env
PORT=3001
```

### Database Connection Error
```bash
# Check PostgreSQL is running
psql -U postgres -c "SELECT 1"

# Verify database exists
psql -U postgres -l | grep coal_mine_carbon

# Check connection parameters in .env
```

### Redis Connection Error
```bash
# Check Redis is running
redis-cli ping
# Should return: PONG

# Verify connection URL in .env
REDIS_URL=redis://localhost:6379
```

### Module Not Found
```bash
# Clean install dependencies
rm -rf node_modules package-lock.json
npm install
```

### Port 5432 or 6379 Not Available
```bash
# For Docker Compose, check docker-compose.yml for port mappings
# Adjust ports if needed
db:
  ports:
    - "5433:5432"  # Maps container 5432 to host 5433
```

## Production Deployment

### Using Heroku
```bash
# Install Heroku CLI
brewinstall heroku/brew/heroku

# Login to Heroku
heroku login

# Create Heroku app
heroku create your-app-name

# Set environment variables
heroku config:set NODE_ENV=production
heroku config:set JWT_SECRET=your-production-secret

# Deploy
git push heroku main

# View logs
heroku logs --tail
```

### Using AWS
See AWS deployment documentation (planned)

## Performance Optimization

### Frontend
- Enable gzip compression
- Minify CSS and JavaScript
- Use lazy loading for components
- Implement service workers

### Backend
- Use connection pooling
- Implement Redis caching
- Add database indexes
- Use pagination for list endpoints

### Database
- Analyze slow queries
- Create appropriate indexes
- Implement archival for old data
- Regular VACUUM and ANALYZE

## Security Checklist

- [ ] Change default JWT_SECRET in production
- [ ] Enable HTTPS/TLS
- [ ] Set strong database passwords
- [ ] Enable database encryption
- [ ] Configure firewall rules
- [ ] Set up regular backups
- [ ] Enable audit logging
- [ ] Review CORS settings
- [ ] Implement rate limiting
- [ ] Regular security updates

## Monitoring

### Logs
```bash
# View backend logs
docker-compose logs backend

# View frontend logs (if using PM2)
pm2 logs frontend

# View PostgreSQL logs
docker-compose logs postgres
```

### Health Checks
```bash
# Check backend health
curl http://localhost:5000/health

# Check database
psql -U coalmine -d coal_mine_carbon -c "SELECT COUNT(*) FROM users;"

# Check Redis
redis-cli ping
```

## Additional Resources

- [React Documentation](https://react.dev)
- [Express.js Guide](https://expressjs.com)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [Docker Documentation](https://docs.docker.com)
- [JWT Introduction](https://jwt.io/introduction)

## Getting Help

- Check GitHub Issues
- Review documentation in `/docs`
- Contact development team
- Submit bug reports with:
  - Steps to reproduce
  - Expected behavior
  - Actual behavior
  - Environment details

## Next Steps

1. Review the API documentation at `/docs/API.md`
2. Explore the architecture in `/docs/ARCHITECTURE.md`
3. Understand emission factors in `/docs/EMISSION_FACTORS.md`
4. Start developing features!

---

Last Updated: May 2026
Version: 1.0.0
