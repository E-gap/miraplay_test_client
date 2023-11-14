import { createSlice } from "@reduxjs/toolkit";
import { getAllGames } from "./gamesOperations";

const gamesSlice = createSlice({
  name: "games",
  initialState: {
    allGames: [],
    isLoading: false,
    total: 0,
    error: null,
  },

  extraReducers: (builder) =>
    builder
      .addCase(getAllGames.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllGames.fulfilled, (state, action) => {
        state.allGames = action.payload.data;
        state.isLoading = false;
        state.total = action.payload.total;
      })
      .addCase(getAllGames.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.allGames = [];
      }),
});

export const gamesReducer = gamesSlice.reducer;
