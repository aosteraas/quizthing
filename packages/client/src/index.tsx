import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components/macro';
import { Provider } from 'react-redux';
import { Layout } from 'antd';
import { store } from './store';
import { GlobalStyle } from './styles';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';

import * as serviceWorker from './serviceWorker';

import 'antd/dist/antd.css';

const AppLayout = styled(Layout)`
  height: 100vh;
`;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <BrowserRouter>
        <AppLayout>
          <App />
        </AppLayout>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
