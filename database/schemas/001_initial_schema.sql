-- Users Table
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  organization VARCHAR(255),
  role VARCHAR(50) DEFAULT 'user',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  is_active BOOLEAN DEFAULT true
);

-- Mines Table
CREATE TABLE IF NOT EXISTS mines (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  type VARCHAR(50) NOT NULL, -- 'underground' or 'open-cast'
  location VARCHAR(255) NOT NULL,
  state VARCHAR(100) NOT NULL,
  annual_capacity NUMERIC(15, 2),
  latitude NUMERIC(10, 8),
  longitude NUMERIC(11, 8),
  registration_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  is_active BOOLEAN DEFAULT true,
  UNIQUE(name, location)
);

-- Mining Activities Table
CREATE TABLE IF NOT EXISTS mining_activities (
  id SERIAL PRIMARY KEY,
  mine_id INTEGER NOT NULL REFERENCES mines(id) ON DELETE CASCADE,
  activity_type VARCHAR(100) NOT NULL, -- 'excavation', 'transportation', 'equipment', 'processing'
  quantity NUMERIC(15, 2) NOT NULL,
  unit VARCHAR(50) NOT NULL, -- 'tonnes', 'kg', 'hours', 'liters'
  emission_factor NUMERIC(10, 6),
  calculated_emissions NUMERIC(15, 4),
  activity_date DATE NOT NULL,
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (mine_id) REFERENCES mines(id) ON DELETE CASCADE
);

-- Emissions Records Table
CREATE TABLE IF NOT EXISTS emissions (
  id SERIAL PRIMARY KEY,
  mine_id INTEGER NOT NULL REFERENCES mines(id) ON DELETE CASCADE,
  month DATE NOT NULL,
  excavation_emissions NUMERIC(15, 4) DEFAULT 0,
  transportation_emissions NUMERIC(15, 4) DEFAULT 0,
  equipment_emissions NUMERIC(15, 4) DEFAULT 0,
  processing_emissions NUMERIC(15, 4) DEFAULT 0,
  total_emissions NUMERIC(15, 4) GENERATED ALWAYS AS (
    excavation_emissions + transportation_emissions + equipment_emissions + processing_emissions
  ) STORED,
  per_capita_emissions NUMERIC(10, 4),
  employees_count INTEGER,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(mine_id, month)
);

-- Carbon Sinks Table
CREATE TABLE IF NOT EXISTS carbon_sinks (
  id SERIAL PRIMARY KEY,
  mine_id INTEGER NOT NULL REFERENCES mines(id) ON DELETE CASCADE,
  sink_type VARCHAR(100) NOT NULL, -- 'afforestation', 'reforestation', 'natural_growth'
  area_hectares NUMERIC(10, 2),
  tree_species VARCHAR(255),
  trees_planted INTEGER,
  annual_co2_sequestration NUMERIC(15, 4),
  sequestration_start_date DATE,
  location VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Neutrality Pathways Table
CREATE TABLE IF NOT EXISTS neutrality_pathways (
  id SERIAL PRIMARY KEY,
  mine_id INTEGER NOT NULL REFERENCES mines(id) ON DELETE CASCADE,
  pathway_name VARCHAR(255) NOT NULL,
  description TEXT,
  baseline_emissions NUMERIC(15, 4),
  strategy_type VARCHAR(100), -- 'electric-vehicles', 'renewable-energy', 'afforestation', 'methane-capture'
  estimated_reduction NUMERIC(15, 4),
  implementation_cost NUMERIC(15, 2),
  implementation_timeline_months INTEGER,
  estimated_years_to_neutrality NUMERIC(5, 2),
  status VARCHAR(50) DEFAULT 'planning', -- 'planning', 'in-progress', 'completed'
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Renewable Energy Table
CREATE TABLE IF NOT EXISTS renewable_energy (
  id SERIAL PRIMARY KEY,
  mine_id INTEGER NOT NULL REFERENCES mines(id) ON DELETE CASCADE,
  energy_type VARCHAR(100) NOT NULL, -- 'solar', 'wind', 'hydro', 'biogas'
  capacity_mw NUMERIC(10, 2),
  annual_energy_kwh NUMERIC(15, 2),
  annual_emission_reduction NUMERIC(15, 4),
  installation_date DATE,
  investment_cost NUMERIC(15, 2),
  payback_period_years NUMERIC(5, 2),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Carbon Credits Table
CREATE TABLE IF NOT EXISTS carbon_credits (
  id SERIAL PRIMARY KEY,
  mine_id INTEGER NOT NULL REFERENCES mines(id) ON DELETE CASCADE,
  credit_amount NUMERIC(15, 4),
  market_rate NUMERIC(10, 2),
  total_value NUMERIC(15, 2) GENERATED ALWAYS AS (credit_amount * market_rate) STORED,
  verification_method VARCHAR(100),
  certification_date DATE,
  expiry_date DATE,
  status VARCHAR(50) DEFAULT 'pending', -- 'pending', 'verified', 'traded', 'retired'
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Dashboard Metrics Table (for caching and faster queries)
CREATE TABLE IF NOT EXISTS dashboard_metrics (
  id SERIAL PRIMARY KEY,
  mine_id INTEGER NOT NULL REFERENCES mines(id) ON DELETE CASCADE,
  month DATE NOT NULL,
  total_emissions NUMERIC(15, 4),
  total_sinks NUMERIC(15, 4),
  gap_to_neutrality NUMERIC(15, 4),
  reduction_percentage NUMERIC(5, 2),
  year_over_year_change NUMERIC(5, 2),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(mine_id, month)
);

-- Emission Factors Reference Table
CREATE TABLE IF NOT EXISTS emission_factors (
  id SERIAL PRIMARY KEY,
  activity_type VARCHAR(100) NOT NULL,
  mining_type VARCHAR(50), -- 'underground', 'open-cast', 'all'
  factor_value NUMERIC(10, 6) NOT NULL,
  unit VARCHAR(50),
  source VARCHAR(255),
  valid_from DATE,
  valid_to DATE,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Audit Logs Table
CREATE TABLE IF NOT EXISTS audit_logs (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  entity_type VARCHAR(100),
  entity_id INTEGER,
  action VARCHAR(50),
  changes JSONB,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for better query performance
CREATE INDEX idx_mines_user_id ON mines(user_id);
CREATE INDEX idx_mining_activities_mine_id ON mining_activities(mine_id);
CREATE INDEX idx_emissions_mine_id ON emissions(mine_id);
CREATE INDEX idx_emissions_month ON emissions(month);
CREATE INDEX idx_carbon_sinks_mine_id ON carbon_sinks(mine_id);
CREATE INDEX idx_pathways_mine_id ON neutrality_pathways(mine_id);
CREATE INDEX idx_renewable_energy_mine_id ON renewable_energy(mine_id);
CREATE INDEX idx_carbon_credits_mine_id ON carbon_credits(mine_id);
CREATE INDEX idx_dashboard_metrics_mine_id ON dashboard_metrics(mine_id);
CREATE INDEX idx_audit_logs_user_id ON audit_logs(user_id);
CREATE INDEX idx_audit_logs_created_at ON audit_logs(created_at);
