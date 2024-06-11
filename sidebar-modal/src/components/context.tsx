import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // add functions that change state

  const openModal = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  const openSidebar = () => {
    setIsSidebarOpen(true);
  }

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  }

 return <AppContext.Provider value={{isModalOpen, isSidebarOpen, openModal, closeModal, openSidebar, closeSidebar}}>{children}</AppContext.Provider>;
}

// create a custom hook so you can access the context on all components
export const useGlobalContext = () => {
  return useContext(AppContext);
  }

export { AppContext, AppProvider }