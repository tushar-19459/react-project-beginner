import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

export const GloableContext = createContext(null)

export function ProvidGloableContext({ children }) {
    const [search, setSearch] = useState('')
    const [loading, setloading] = useState(false)
    const [error, setError] = useState(null)
    const [data, setdata] = useState()
    const [fav, setFav] = useState([])
    async function handleSearch(e) {
        try {
            e.preventDefault()
            setloading(true)
            const responce = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${search}`)
            setSearch('')
            if (!responce.ok) throw new Error(responce.statusText);
            const jsondata = await responce.json()
            setdata(jsondata.data.recipes)
        } catch (error) {
            setError(error.message)
        } finally {
            setloading(false)
        }
    }




    return (
        <GloableContext.Provider value={{ search, setSearch, data, handleSearch, loading,setloading, fav, setFav, error, setError }}>
            {children}
        </GloableContext.Provider>
    )
}

export function ConsumeContext() {
    return useContext(GloableContext)
}