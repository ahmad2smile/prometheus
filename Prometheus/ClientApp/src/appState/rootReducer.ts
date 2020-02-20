import { combineReducers, ThunkAction, Action } from "@reduxjs/toolkit";

import jobsSlice from "./jobs/jobsSlice";

export const rootReducer = combineReducers({
	jobsState: jobsSlice
});

export type AppState = ReturnType<typeof rootReducer>;

export type AppThunk = ThunkAction<void, AppState, null, Action<string>>;
