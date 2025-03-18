import { createContext, useContext, useState, ReactNode } from "react";

// Create Context
const Context = createContext<{
    searchQuery: string;
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
} | null>(null);

// Context Provider
export const ContextProvider = ({ children }: { children: ReactNode }) => {
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <Context.Provider value={{ searchQuery, setSearchQuery }}>
            {children}
        </Context.Provider>
    );
};

// Custom Hook for Global Context
export const useGlobalContext = () => {
    const context = useContext(Context);
    if (!context) {
        throw new Error("useGlobalContext must be used within a ContextProvider");
    }
    return context;
};
