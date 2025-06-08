import { createContext, useContext, useState, ReactNode } from "react"

interface GlobalContextType {
    searchQuery: string;
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
    name: string;
    setName: React.Dispatch<React.SetStateAction<string>>;
    age: number | "";
    setAge: React.Dispatch<React.SetStateAction<number | "">>;
    gender: string;
    setGender: React.Dispatch<React.SetStateAction<string>>;
    contact: string;
    setContact: React.Dispatch<React.SetStateAction<string>>;
    test: string;
    setTest: React.Dispatch<React.SetStateAction<string>>;
    price: number;
    setPrice: React.Dispatch<React.SetStateAction<number>>;
    resetFields: () => void;
}
const Context = createContext<GlobalContextType | null>(null);
export const ContextProvider = ({ children }: { children: ReactNode }) => {
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [age, setAge] = useState<number | "">("");
    const [gender, setGender] = useState<string>("");
    const [contact, setContact] = useState<string>("");
    const [test, setTest] = useState<string>("");
    const [price, setPrice] = useState<number>(0);

    const resetFields = () => {
        setName("");
        setAge("");
        setGender("");
        setContact("");
        setTest("");
        setPrice(0);
    };
    return (
        <Context.Provider
            value={{
                searchQuery,
                setSearchQuery,
                name,
                setName,
                age,
                setAge,
                gender,
                setGender,
                contact,
                setContact,
                test,
                setTest,
                price,
                setPrice,
                resetFields,
            }}
        >
            {children}
        </Context.Provider>
    );
};

export const useGlobalContext = () => {
    const context = useContext(Context);
    if (!context) {
        throw new Error("useGlobalContext must be used within a ContextProvider");
    }
    return context;
};
