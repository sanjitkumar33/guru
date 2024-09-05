import React from 'react';
import {Outlet} from 'react-router-dom';
import { ApplicationContextProvider } from './context/ApplicationContext';

const Main = () => {
    return(
      <div>
        <ApplicationContextProvider>
          <Outlet />
        </ApplicationContextProvider>
      </div>
        
    )
}

export default Main;