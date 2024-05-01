import React from "react";
import { useContext,createContext } from "react";

export const DataContext=createContext({
    ans:2,
});

export const DataProvider=DataContext.Provider
export default function useTheme() {
    return useContext(DataContext)
    
}

