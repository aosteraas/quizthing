import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Layout } from 'antd';
import { store } from './store';
import { GlobalStyle } from './styles';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';

import * as serviceWorker from './serviceWorker';

import 'antd/dist/antd.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <BrowserRouter>
        <Layout>
          <App />
        </Layout>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
