export const selectAuthUserData = state => state.auth.userData;
export const selectAuthToken = state => state.auth.token;
export const selectAuthIsLoggedIn = state => state.auth.isLoggedIn;
export const selectAuthIsRefreshing = state => state.auth.isRefreshing;
export const selectAuthIsLoading = state => state.auth.isLoading;
export const selectAuthError = state => state.auth.error;
