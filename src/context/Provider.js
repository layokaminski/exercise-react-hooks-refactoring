// src/context/Provider.js

import React, { useState } from 'react';
import CarsContext from './CarsContext';


const CarsProvider = ({ children }) => {
  const [ cars, setCars ] = useState({
    red: false,
    blue: false,
    yellow: false,
  });

  const [ signal, setSignal ] = useState({ color: 'red' });

  const moveCar = (car, side) => {
    setCars({
        ...cars,
        [car]: side,
    });
  };

  const changeSignal = (signalColor) => {
    setSignal({ color: signalColor });
  };

  const context = {
    cars,
    signal,
    moveCar,
    changeSignal,
  };

  return (
    <CarsContext.Provider value={context}>
      {children}
    </CarsContext.Provider>
  );
}

export { CarsContext, CarsProvider as Provider };
