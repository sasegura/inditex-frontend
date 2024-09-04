import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { persistor } from '../../redux/store';
import { configureStore } from '@reduxjs/toolkit';
import apiSlice from '../../redux/slices/apiSlice';

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export const TestWrapper = ({
  children,
  url = '/',
  path = '*',
}: {
  children: React.ReactNode;
  url?: string;
  path?: string;
}) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MemoryRouter initialEntries={[url]}>
          <Routes>
            <Route path={path} element={children} />
          </Routes>
        </MemoryRouter>
      </PersistGate>
    </Provider>
  );
};
