import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";
import modelReducer from "./modelSlice";
const reducer = {
	model: modelReducer,
};
const appReducer = combineReducers(reducer);
const persistConfig = {
	key: "root",
	version: 1,
	storage,
	// whiteList : reducer key wanna storage
	// blackList : reducer key don't wanna storage
	whitelist: [],
};
const rootReducer = (state, action) => {
	return appReducer(state, action);
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});
export const persistor = persistStore(store);
