import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Header from './Components/Header';
import Routes from './Components/routes';
import store from './Store';




const App = () => {
  return(
    <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Routes />
       </BrowserRouter>
    </Provider>
  );
}

export default App; 