import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Notiflix from 'notiflix';

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const register = createAsyncThunk(
  'auth/register',
  async (userData, thunkApi) => {
    try {
      const { data } = await instance.post('users/register', userData);
      instance.defaults.headers.common.Authorization = `Bearer ${data.token}`;
      Notiflix.Notify.success('You are registered');
      return data;
    } catch (error) {
      Notiflix.Notify.failure(
        'Registration failed, please check the credentials'
      );
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  'auth/changeUser',
  async (reqBody, thunkApi) => {
    const { dataUser, userId } = reqBody;
    try {
      const { data } = await instance.patch(`/users/${userId}`, dataUser);
      Notiflix.Notify.success('User is updated');
      return data.user;
    } catch (error) {
      Notiflix.Notify.failure('User is not updated, try later');
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (userData, thunkApi) => {
    try {
      const { data } = await instance.post('users/login', userData);
      instance.defaults.headers.common.Authorization = `Bearer ${data.token}`;
      Notiflix.Notify.success('You are loged in');
      return data;
    } catch (error) {
      Notiflix.Notify.failure('Login failed, please check the credentials');
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkApi) => {
  try {
    await instance.post('/users/logout');
    instance.defaults.headers.common.Authorization = ``;
    Notiflix.Notify.success('You are loged out');
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const refresh = createAsyncThunk('auth/current', async (_, thunkApi) => {
  const { token } = thunkApi.getState().auth;
  if (!token)
    return thunkApi.rejectWithValue(
      'Sign In if you want to save your score history'
    );
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  try {
    const { data } = await instance.get('/users/current');

    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const changeFavorite = createAsyncThunk(
  'auth/changeFavorite',
  async (carId, thunkApi) => {
    const { token } = thunkApi.getState().auth;

    if (!token)
      return thunkApi.rejectWithValue(
        'Sign In if you want to add car to Favorite'
      );
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    try {
      const { data } = await instance.put('/users/changeFavorite', { carId });
      Notiflix.Notify.success('You changed status');
      return data;
    } catch (error) {
      Notiflix.Notify.failure('Change status failed');
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
