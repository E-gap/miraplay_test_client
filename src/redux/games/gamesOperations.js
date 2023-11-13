import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../auth/authOperations";
import Notiflix from "notiflix";

export const getAllGames = createAsyncThunk(
  "games/getAllGames",
  async (search, thunkApi) => {
    try {
      const { data } = await instance.get(
        search ? `/games${search}` : `/games`
      );
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getOneCar = async (carId) => {
  try {
    const { data } = await instance.get(`/games/${carId}`);
    return data;
  } catch (error) {
    return error;
  }
};

export const getFavoriteGames = createAsyncThunk(
  "games/getFavoriteGames",
  async (search, thunkApi) => {
    const { token } = thunkApi.getState().auth;

    if (!token)
      return thunkApi.rejectWithValue(
        "Sign In if you want to get Favorite Games"
      );
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;

    try {
      const { data } = await instance.get(
        search ? `/games/favorite${search}` : `/games/favorite`
      );
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getUserGames = createAsyncThunk(
  "games/getUserGames",
  async (search, thunkApi) => {
    const { token } = thunkApi.getState().auth;

    if (!token)
      return thunkApi.rejectWithValue("Sign In if you want to get Your Games");
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    try {
      const { data } = await instance.get(
        search ? `/games/user${search}` : `/games/user`
      );
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addCar = createAsyncThunk(
  "games/addCar",
  async (dataCar, thunkApi) => {
    try {
      const { data } = await instance.post("/games", dataCar);
      Notiflix.Notify.success("New car is added");
      return data.data;
    } catch (error) {
      Notiflix.Notify.failure("Car is not added");
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const changeCar = createAsyncThunk(
  "games/changeCar",
  async (reqBody, thunkApi) => {
    const { dataCar, carId } = reqBody;
    try {
      const { data } = await instance.patch(`/games/${carId}`, dataCar);
      Notiflix.Notify.success("Car item is changed");
      return data;
    } catch (error) {
      Notiflix.Notify.failure("Car is not changed");
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteCar = createAsyncThunk(
  "games/deleteCar",
  async (carId, thunkApi) => {
    try {
      const { data } = await instance.delete(`/games/${carId}`);
      Notiflix.Notify.success("Car item is removed");
      return data.data;
    } catch (error) {
      Notiflix.Notify.failure("Car is not removed");
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
