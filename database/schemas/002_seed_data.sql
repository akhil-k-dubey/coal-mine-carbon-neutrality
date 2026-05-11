-- Emission Factors for Coal Mining (India-specific standards)
INSERT INTO emission_factors (activity_type, mining_type, factor_value, unit, source, valid_from, valid_to, is_active)
VALUES
  -- Excavation factors (tCO2e per tonne of coal)
  ('excavation', 'underground', 0.15, 'tCO2e/tonne', 'IPCC Guidelines 2019', '2024-01-01', NULL, true),
  ('excavation', 'open-cast', 0.12, 'tCO2e/tonne', 'IPCC Guidelines 2019', '2024-01-01', NULL, true),
  ('excavation', 'all', 0.135, 'tCO2e/tonne', 'IPCC Guidelines 2019', '2024-01-01', NULL, true),
  
  -- Transportation factors (tCO2e per km-tonne)
  ('transportation', 'underground', 0.25, 'tCO2e/km-tonne', 'Indian Bureau of Mines', '2024-01-01', NULL, true),
  ('transportation', 'open-cast', 0.22, 'tCO2e/km-tonne', 'Indian Bureau of Mines', '2024-01-01', NULL, true),
  ('transportation', 'all', 0.235, 'tCO2e/km-tonne', 'Indian Bureau of Mines', '2024-01-01', NULL, true),
  
  -- Equipment usage factors (tCO2e per operating hour)
  ('equipment', 'underground', 0.35, 'tCO2e/hour', 'Ministry of Coal', '2024-01-01', NULL, true),
  ('equipment', 'open-cast', 0.42, 'tCO2e/hour', 'Ministry of Coal', '2024-01-01', NULL, true),
  ('equipment', 'all', 0.385, 'tCO2e/hour', 'Ministry of Coal', '2024-01-01', NULL, true),
  
  -- Processing factors (tCO2e per tonne)
  ('processing', 'underground', 0.20, 'tCO2e/tonne', 'IPCC Guidelines 2019', '2024-01-01', NULL, true),
  ('processing', 'open-cast', 0.18, 'tCO2e/tonne', 'IPCC Guidelines 2019', '2024-01-01', NULL, true),
  ('processing', 'all', 0.19, 'tCO2e/tonne', 'IPCC Guidelines 2019', '2024-01-01', NULL, true);

-- Default user for demo
INSERT INTO users (email, password_hash, name, organization, role)
VALUES ('demo@coalcarbon.org', '$2b$10$abcdefghijklmnopqrstuvwxyz', 'Demo User', 'Coal Mining Authority', 'admin')
ON CONFLICT (email) DO NOTHING;
