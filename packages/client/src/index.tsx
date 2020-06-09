import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

const render = (Component: React.ComponentType) => {
  return ReactDOM.render(
    <React.StrictMode>
      <ThemeProvider>
        <CSSReset />
        <Provider store={store}>
          <BrowserRouter>
            <Component />
          </BrowserRouter>
        </Provider>
      </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root'),
  );
};

render(App);

// TODO figure out typings for this so as to not need to cast
if ((module as any).hot) {
  (module as any).hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default;
    render(NextApp);
  });
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
