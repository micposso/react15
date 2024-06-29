import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {

  const [isSideBarOpen, setIsSideBarOpen] = useState(true);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(true);

  const OpenSidebar = () => {
    setIsSideBarOpen(true)
  }

   const closeSidebar = () => {
     setIsSideBarOpen(false);
  };
  
    const openSubMenu = () => {
      setIsSubMenuOpen(true);
    };

    const closeSubMenu = () => {
      setIsSubMenuOpen(false);
    };

  return (
    <AppContext.Provider
      value={{
        isSideBarOpen,
        isSubMenuOpen,
        OpenSidebar,
        closeSidebar,
        openSubMenu,
        closeSubMenu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

// setup custom hook

export const useGlobalContext = () => {
  return useContext(AppContext)
}