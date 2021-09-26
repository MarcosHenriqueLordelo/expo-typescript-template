import React, { createContext } from "react";

type TypeMainContext = {};

const MainContex = createContext<TypeMainContext>({} as TypeMainContext);

export const MainProvider: React.FC = ({ children }) => {
  return <MainContex.Provider value={{}}>{children}</MainContex.Provider>;
};

export default MainContex;
