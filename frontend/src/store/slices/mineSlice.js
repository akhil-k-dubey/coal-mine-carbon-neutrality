import { createSlice } from '@reduxjs/toolkit';

const mineSlice = createSlice({
  name: 'mines',
  initialState: {
    mines: [],
    selectedMine: null,
    loading: false,
    error: null,
  },
  reducers: {
    setMines: (state, action) => {
      state.mines = action.payload;
    },
    setSelectedMine: (state, action) => {
      state.selectedMine = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setMines, setSelectedMine, setLoading, setError } = mineSlice.actions;
export default mineSlice.reducer;
