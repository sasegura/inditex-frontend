import { Container } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import './App.css';

import { PersistGate } from 'redux-persist/integration/react';
import Header from './containers/header/header';

import Router from './router';
import { persistor, store } from './redux/store';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Container maxWidth="lg">
            <Header />
            <Router />
          </Container>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
