import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';
import { GlobalStyle } from '../styles';

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <p>todo</p>
    </Provider>
  );
};

export default App;
