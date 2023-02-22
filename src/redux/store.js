import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './user-slice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persiststor = persistStore(store);
