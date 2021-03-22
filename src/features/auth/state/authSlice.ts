import { createSlice } from "@reduxjs/toolkit";
import { AppThunk } from "../../../app/store";
import { RootState } from "../../../app/store";

interface AuthState {
  isLogin: boolean;
  loading: boolean;
  error: string;
}

const initialState: AuthState = {
  isLogin: false,
  loading: false,
  error: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoginState(state, action) {
      state.isLogin = action.payload;
      state.loading = false;
    },
    loginSuccess(state) {
      state.isLogin = true;
    },
    loginFailure(state, action) {
      state.error = action.payload.error;
      state.isLogin = false;
    },
    logout(state) {
      state.isLogin = false;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const { loginSuccess } = authSlice.actions;
export const { loginFailure } = authSlice.actions;
export const { logout } = authSlice.actions;
export const { setLoginState } = authSlice.actions;

export const selectLogin = (state: RootState) => state.auth.isLogin;
export const selectLoading = (state: RootState) => state.auth.loading;

export const fetchAuth = (username: string, password: string): AppThunk => async (dispatch) => {
  return new Promise(function (resolve, reject) {
    if (username === "admin" && password === "admin") {
      dispatch(loginSuccess());
    } else {
      return reject("Проверьте введённые данные");
    }
  });
};

export const fetchLogout = (): AppThunk => async (dispatch) => {
  dispatch(logout());
};

export default authSlice.reducer;
