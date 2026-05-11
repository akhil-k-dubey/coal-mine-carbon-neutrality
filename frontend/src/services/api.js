import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

const api = axios.create({
  baseURL: `${API_URL}/api/v1`,
});

// Request interceptor to add token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Mine APIs
export const mineAPI = {
  register: (data) => api.post('/mines', data),
  getAll: () => api.get('/mines'),
  getById: (id) => api.get(`/mines/${id}`),
  update: (id, data) => api.put(`/mines/${id}`, data),
  delete: (id) => api.delete(`/mines/${id}`),
};

// Emission APIs
export const emissionAPI = {
  calculate: (data) => api.post('/emissions/calculate', data),
  getByMine: (mineId) => api.get(`/emissions/${mineId}`),
  getHistory: (mineId) => api.post(`/emissions/${mineId}/history`),
};

// Pathway APIs
export const pathwayAPI = {
  simulate: (data) => api.post('/pathways/simulate', data),
  getPathways: (mineId) => api.get(`/pathways/${mineId}`),
};

// Dashboard APIs
export const dashboardAPI = {
  getData: (mineId) => api.get(`/dashboard/${mineId}`),
  getMetrics: (mineId) => api.get(`/dashboard/${mineId}/metrics`),
};

// Carbon Credit APIs
export const carbonCreditAPI = {
  estimate: (data) => api.post('/carbon-credits/estimate', data),
  getCredits: (mineId) => api.get(`/carbon-credits/${mineId}`),
};

export default api;
