import React from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import { Provider } from 'react-redux';
import { store } from '../store';
import { BrowserRouter } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
}
const Providers = ({ children }: Props): JSX.Element => (
  <ThemeProvider>
    <CSSReset />
    <Provider store={store}>
      <BrowserRouter>{children}</BrowserRouter>
    </Provider>
  </ThemeProvider>
);
type Options = Omit<RenderOptions, 'queries'>;

const customRender = (ui: React.ReactElement, options: Options) =>
  render(ui, { wrapper: Providers as React.ComponentType, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
