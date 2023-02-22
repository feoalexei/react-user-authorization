import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { Provider } from 'react-redux';
import { persiststor, store } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persiststor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
