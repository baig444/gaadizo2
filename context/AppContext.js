"use client"; // Important! Use this in client components

import { createContext, useContext, useState } from "react";

// Create Context
const AppContext = createContext();

// Provider Component
export function AppProvider({ children }) {
  const [selectedBrand, setSelectedBrand] = useState("")
  const [selectedModel, setSelectedModel] = useState("")
  const [selectedFuel, setSelectedFuel] = useState("")

  return (
    <AppContext.Provider value={{ selectedBrand, setSelectedBrand, selectedModel, setSelectedModel, selectedFuel, setSelectedFuel }}>
      {children}
    </AppContext.Provider>
  );
}

// Custom Hook to use the context
export function useAppContext() {
  return useContext(AppContext);
}
