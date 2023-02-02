import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { userReducer } from "./reducers/userReducer.js";
import { logger } from "redux-logger";
import thunk from "redux-thunk";

// persist import
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const reducers = combineReducers({
  user: userReducer,
});

// persist config
const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [logger, thunk],
});

export const persistor = persistStore(store);
