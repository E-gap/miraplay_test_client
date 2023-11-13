import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  login,
  logout,
  refresh,
  changeFavorite,
  updateUser,
} from './authOperations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null, city: null, tel: null },
    userId: '',
    token: null,
    favorites: [],
    isLogin: false,
    isLoading: false,
    error: '',
  },
  extraReducers: builder =>
    builder
      .addCase(register.pending, state => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.userId = action.payload.userId;
        state.isLogin = true;
        state.isLoading = false;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(updateUser.pending, state => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(login.pending, state => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.favorites = action.payload.favorites;
        state.token = action.payload.token;
        state.userId = action.payload.user.userId;
        state.isLogin = true;
        state.isLoading = false;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(logout.pending, state => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(logout.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLogin = false;
        state.isLoading = false;
        state.userId = '';
        state.favorites = [];
      })
      .addCase(logout.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(refresh.pending, state => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(refresh.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.userId = action.payload.userId;
        state.isLogin = true;
        state.isLoading = false;
        state.favorites = action.payload.favorites;
      })
      .addCase(refresh.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(changeFavorite.fulfilled, (state, action) => {
        state.favorites = action.payload.favorites;
      })
      .addCase(changeFavorite.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const authReducer = authSlice.reducer;
