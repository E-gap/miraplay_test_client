import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../auth/authOperations";

export const getAllGames = createAsyncThunk(
  "games/getAllGames",
  async (search, thunkApi) => {
    try {
      const { data } = await instance.get(
        `/games/?genre=${search.activeGenre}&page=${search.page}&sortBy=${search.sortBy}`
      );

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
