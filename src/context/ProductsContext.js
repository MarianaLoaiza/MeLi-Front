import React, { useState } from "react";

const Context = React.createContext({});

export function ProductsContextProvider({ children }) {
  const [elements, setElements] = useState([]);

  return (
    <Context.Provider value={{ elements, setElements }}>
      {children}
    </Context.Provider>
  );
}

export default Context;
