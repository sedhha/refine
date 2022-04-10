import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import store from '@redux/store';
type Props = {
  children: React.ReactNode;
};

export default function BaseComponent({ children }: Props) {
  return (
    <React.Fragment>
      <ReduxProvider store={store}>{children}</ReduxProvider>
    </React.Fragment>
  );
}
