import { createSlice } from '@reduxjs/toolkit';

const emissionSlice = createSlice({
  name: 'emissions',
  initialState: {
    emissions: [],
    totalEmissions: 0,
    loading: false,
    error: null,
  },
  reducers: {
    setEmissions: (state, action) => {
      state.emissions = action.payload;
    },
    setTotalEmissions: (state, action) => {
      state.totalEmissions = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setEmissions, setTotalEmissions, setLoading, setError } = emissionSlice.actions;
export default emissionSlice.reducer;
