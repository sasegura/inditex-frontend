import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { 
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';


import main from './slices/mainSlice';
import apiSlice from './slices/apiSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, main.reducer);

export const store = configureStore({
  reducer: {
    api: apiSlice.reducer,
    main: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },}).concat([apiSlice.middleware]),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

