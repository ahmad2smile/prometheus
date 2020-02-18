import { configureStore } from "@reduxjs/toolkit";

import { rootReducer } from "./rootReducer";

export type AppState = ReturnType<typeof rootReducer>;

export const store = configureStore({
	reducer: rootReducer
});
