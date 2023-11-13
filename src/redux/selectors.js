export const selectIsLogin = state => state.auth.isLogin;

export const selectUserName = state => state.auth.user.name;

export const selectUserData = state => state.auth.user;

export const selectUserId = state => state.auth.userId;

export const selectUserFavorites = state => state.auth.favorites;

export const selectAllCars = state => state.cars.allCars;

export const selectTotalCars = state => state.cars.total;

export const selectIsUserLoading = state => state.auth.isLoading;

export const selectIsCarsLoading = state => state.cars.isLoading;

export const selectAuthError = state => state.auth.error;

export const selectCarsError = state => state.cars.error;

export const selectCarsSortBy = state => state.cars.sortBy;
