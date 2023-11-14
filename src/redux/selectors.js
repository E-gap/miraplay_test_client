export const selectAllGames = (state) => state.games.allGames;

export const selectTotalGames = (state) => state.games.total;

export const selectIsLogin = (state) => state.auth.isLogin;

export const selectUserName = (state) => state.auth.user.name;

export const selectUserData = (state) => state.auth.user;

export const selectIsUserLoading = (state) => state.auth.isLoading;

export const selectIsGamesLoading = (state) => state.games.isLoading;

export const selectAuthError = (state) => state.auth.error;

export const selectGamesError = (state) => state.games.error;
