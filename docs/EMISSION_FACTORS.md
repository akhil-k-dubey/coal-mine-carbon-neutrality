# Emission Factors and Calculation Guidelines

## Overview

Emission factors are coefficients that quantify GHG emissions based on activity levels. They are used to convert activity data into emission estimates.

## Standard Emission Factors for Coal Mining

### 1. Excavation Activities

**Definition**: Activities related to removing coal and overburden from the mine.

**Emission Factors**:
- **Underground Mining**: 0.15 tCO2e per tonne of coal extracted
- **Open-cast Mining**: 0.12 tCO2e per tonne of coal extracted
- **Average**: 0.135 tCO2e per tonne

**Sources**: IPCC Guidelines for National Greenhouse Gas Inventories (2019)

**Calculation Example**:
```
If 1,000 tonnes of coal are excavated (open-cast):
Emissions = 1,000 × 0.12 = 120 tCO2e
```

### 2. Transportation Activities

**Definition**: Movement of coal from mine site to storage or processing facility.

**Emission Factors**:
- **Underground Mining**: 0.25 tCO2e per km-tonne
- **Open-cast Mining**: 0.22 tCO2e per km-tonne
- **Average**: 0.235 tCO2e per km-tonne

**Sources**: Indian Bureau of Mines Standards

**Calculation Example**:
```
If 500 tonnes are transported 50 km:
Activity = 500 × 50 = 25,000 km-tonnes
Emissions = 25,000 × 0.22 = 5,500 tCO2e
```

### 3. Equipment Usage

**Definition**: Operation of mining machinery and equipment powered by electricity or fossil fuels.

**Emission Factors**:
- **Underground Mining**: 0.35 tCO2e per operating hour
- **Open-cast Mining**: 0.42 tCO2e per operating hour
- **Average**: 0.385 tCO2e per operating hour

**Sources**: Ministry of Coal, India

**Calculation Example**:
```
If excavators and trucks operate for 100 hours:
Emissions = 100 × 0.42 = 42 tCO2e (for open-cast)
```

### 4. Processing Activities

**Definition**: Coal washing, grading, and preparation for market.

**Emission Factors**:
- **Underground Mining**: 0.20 tCO2e per tonne of coal processed
- **Open-cast Mining**: 0.18 tCO2e per tonne of coal processed
- **Average**: 0.19 tCO2e per tonne

**Sources**: IPCC Guidelines 2019

**Calculation Example**:
```
If 1,000 tonnes are processed:
Emissions = 1,000 × 0.18 = 180 tCO2e (for open-cast)
```

## Carbon Sink Factors

### Afforestation and Reforestation

**Tree Species Sequestration Rates** (average annual CO2 absorption):

| Species | Region | Annual Sequestration (tCO2/hectare/year) |
|---------|--------|------------------------------------------|
| Sal | Central India | 2.1 |
| Teak | Western Ghats | 2.5 |
| Neem | North India | 1.8 |
| Eucalyptus | South India | 3.2 |
| Mango | Pan-India | 1.5 |
| Bamboo | Eastern India | 4.0 |

**Calculation Example**:
```
If 100 hectares are afforested with Eucalyptus in South India:
Annual CO2 Sequestration = 100 × 3.2 = 320 tCO2/year
```

### Renewable Energy Offset

**Emission Reduction Factors**:
- **Solar Power**: 0.45 tCO2e per MWh generated
- **Wind Power**: 0.40 tCO2e per MWh generated
- **Hydro Power**: 0.10 tCO2e per MWh generated (lower due to lifecycle emissions)
- **Biogas**: 0.50 tCO2e per MWh generated

**Calculation Example**:
```
If a 1 MW solar installation generates 1,200 MWh annually:
Emissions Avoided = 1,200 × 0.45 = 540 tCO2e/year
```

## Calculation Methodology

### Step 1: Data Collection
Gather activity data:
- Quantity of coal extracted/processed (tonnes)
- Transportation distance (kilometers)
- Equipment operating hours
- Employee count for per-capita calculation

### Step 2: Apply Emission Factors
Use the appropriate factors based on:
- Mining type (underground vs. open-cast)
- Specific activity type
- Regional variations

### Step 3: Calculate Scope Emissions

**Scope 1 (Direct Emissions)**:
```
Scope 1 = Excavation + Transportation + Equipment + Processing
         = (Qty_ex × EF_ex) + (Qty_tr × EF_tr) + (Qty_eq × EF_eq) + (Qty_pr × EF_pr)
```

**Scope 2 (Electricity Purchased)**:
```
Scope 2 = kWh Purchased × Grid Emission Factor (varies by state)
        = kWh × State-specific factor (typically 0.8-1.2 tCO2e/MWh)
```

**Scope 3 (Indirect Emissions)**:
```
Scope 3 = Employee commute + Waste + Supply chain
        = (Employee-km × emission factor) + ...
```

### Step 4: Calculate Per-Capita Emissions
```
Per-Capita = Total Emissions / Number of Employees
```

### Step 5: Identify Carbon Sinks
- Natural forest growth
- Afforestation projects
- Renewable energy installations

### Step 6: Gap Analysis
```
Gap = Total Emissions - Total Sinks
Reduction Needed = Gap / Years to Neutrality
```

## State-Specific Factors

### Electricity Grid Emission Factors (2026 estimates)

| State | Factor (tCO2e/MWh) | Note |
|-------|-------------------|------|
| Odisha | 0.95 | Coal-heavy grid |
| Chhattisgarh | 0.98 | Coal-heavy grid |
| Jharkhand | 0.96 | Coal-heavy grid |
| Andhra Pradesh | 0.85 | Renewable growth |
| Karnataka | 0.72 | Strong hydro presence |
| Tamil Nadu | 0.65 | High wind generation |
| Gujarat | 0.75 | Growing solar |
| Rajasthan | 0.68 | High solar generation |

## Quality Assurance

1. **Data Validation**: Ensure activity data is within expected ranges
2. **Cross-checking**: Compare calculations against historical trends
3. **Third-party Verification**: Independent audits for carbon credit claims
4. **Documentation**: Maintain records for compliance and transparency

## Regular Updates

- Emission factors are reviewed annually
- Updates based on latest IPCC guidelines
- State-specific factors updated based on grid changes
- New technology factors added as they emerge

## References

1. IPCC Guidelines for National Greenhouse Gas Inventories (2019)
2. Indian Bureau of Mines Technical Standards
3. Ministry of Coal, Government of India
4. NMEEE (National Mission for Enhanced Energy Efficiency)
5. Carbon Trust UK Emission Factor Database
