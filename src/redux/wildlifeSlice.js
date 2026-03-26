import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchWildlife = createAsyncThunk(
  "wildlife/fetchWildlife",
  async () => {
    const res = await fetch("http://localhost:3000/wildlife/");
    return await res.json();
  }
);

const wildlifeSlice = createSlice({
  name: "wildlife",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWildlife.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchWildlife.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchWildlife.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default wildlifeSlice.reducer;
