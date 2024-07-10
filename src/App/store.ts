

/**
 * This file contains the configuration for the Redux store.
 */

import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
//import todoReducer from '../features/todo/todoSlice';
//import { todoApi } from '../features/todo/todoApi';
import { loginAPI } from '../features/auth/login/login.api';
import { usersAPI } from '../features/users/users.api';

//auth persist config
const persistConfig = {
  key: 'auth',
  storage,
}

//combine all reducers
const rootReducer = combineReducers({
  //todo: todoReducer,
  [loginAPI.reducerPath]: loginAPI.reducer,
  [usersAPI.reducerPath]: usersAPI.reducer,
});

//apply pesist Reducer to only counter reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

/**
 * The Redux store instance.
 */
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loginAPI.middleware).concat(usersAPI.middleware),
});

/**
 * The persisted store instance.
 */
export const persistedStore = persistStore(store);

/**
 * The type representing the root state of the Redux store.
 */
export type RootState = ReturnType<typeof store.getState>;

/**
 * The type representing the dispatch function of the Redux store.
 */
export type AppDispatch = typeof store.dispatch;
