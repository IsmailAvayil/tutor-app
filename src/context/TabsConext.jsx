import React, { useState, createContext } from "react";

export const AppContext = createContext();

export const TabsContextProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState("overview");
  return (
    <AppContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </AppContext.Provider>
  );
};
