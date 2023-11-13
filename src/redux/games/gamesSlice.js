import { createSlice } from "@reduxjs/toolkit";
import {
  addCar,
  deleteCar,
  getAllGames,
  getFavoriteGames,
  getUserGames,
  changeCar,
} from "./gamesOperations";

const gamesSlice = createSlice({
  name: "games",
  initialState: {
    allGames: [],
    isLoading: false,
    total: 0,
    error: null,
  },
  reducers: {
    changeSortBy(state, action) {
      state.sortBy = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getAllGames.pending, (state) => {
        console.log("getAll");
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
      })
      .addCase(getFavoriteGames.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getFavoriteGames.fulfilled, (state, action) => {
        state.allGames = action.payload.data;
        state.isLoading = false;
        state.total = action.payload.total;
      })
      .addCase(getFavoriteGames.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.allGames = [];
      })
      .addCase(getUserGames.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getUserGames.fulfilled, (state, action) => {
        state.allGames = action.payload.data;
        state.isLoading = false;
        state.total = action.payload.total;
      })
      .addCase(getUserGames.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.allGames = [];
      })
      .addCase(addCar.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addCar.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(addCar.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(changeCar.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(changeCar.fulfilled, (state, action) => {
        state.isLoading = false;
        state.allGames = action.payload.data;
      })
      .addCase(changeCar.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteCar.pending, (state) => {
        state.error = null;
      })
      .addCase(deleteCar.fulfilled, (state, action) => {
        state.allGames = action.payload;
      })
      .addCase(deleteCar.rejected, (state, action) => {
        state.error = action.payload;
      }),
});

export const { changeSortBy } = gamesSlice.actions;

export const gamesReducer = gamesSlice.reducer;
