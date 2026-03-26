import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPrograms = createAsyncThunk(
  "programs/fetchPrograms",
  async () => {
    const res = await fetch("http://localhost:3000/program");
    return res.json();
  }
);

export const deleteProgram = createAsyncThunk(
  "programs/deleteProgram",
  async (id) => {
    await fetch(`http://localhost:3000/program/${id}`, {
      method: "DELETE",
    });
    return id;
  }
);


const programSlice = createSlice({
  name: "programs",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPrograms.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPrograms.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchPrograms.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteProgram.fulfilled, (state, action) => {
        state.data = state.data.filter((p)=>p.ID!==action.payload);
      });
  },
});

export default programSlice.reducer;
