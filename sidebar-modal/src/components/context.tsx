import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
 return <AppContext.Provider value="hello">{children}</AppContext.Provider>;
}

// create a custom hook so you can access the context on all components
export const useGlobalContext = () => {
  return useContext(AppContext);
  }

export { AppContext, AppProvider }