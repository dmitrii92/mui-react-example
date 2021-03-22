import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import authReducer from "../features/auth/state/authSlice";
import projectReducer from "./../features/project/state/projectSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    project: projectReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk = ThunkAction<any, RootState, unknown, Action<string>>;
