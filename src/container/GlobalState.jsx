import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from "react-toastify";

import { store } from './../store/index';

const GlobalState = ({ children }) => {

   return (
      <Provider store={store}>
         <>
            {children}
            <ToastContainer />
         </>
      </Provider>
   );
}

export default GlobalState;