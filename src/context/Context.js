import React from 'react';
import { useContext, createContext, useState } from 'react';

export const UserContext = createContext();

export const UseContextProvider = ({ children }) => {
  const [navToggle, setNavToggle] = useState(false);

  return (
    <UserContext.Provider value={{ navToggle, setNavToggle }}>
      {children}
    </UserContext.Provider>
  );
};

export const UseContent = () => {
  return useContext(UserContext);
};
