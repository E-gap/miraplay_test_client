export const selectAllGames = (state) => state.games.allGames;

export const selectTotalGames = (state) => state.games.total;

export const selectIsLogin = (state) => state.auth.isLogin;

export const selectUserName = (state) => state.auth.user.name;

export const selectIsUserLoading = (state) => state.auth.isLoading;
