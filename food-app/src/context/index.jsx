import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

export const GloableContext = createContext(null)

export  function ProvidGloableContext({ children }) {
    const [search, setSearch] = useState("")
    return (
        <GloableContext.Provider value={{ search, setSearch }}>
            {children}
        </GloableContext.Provider>
    )
}

export  function ConsumeContext() {
    return useContext(GloableContext)
}