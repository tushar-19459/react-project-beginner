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
    const [favdata, setFavdata] = useState([])
    const [itemdetal, setitemdetails] = useState()

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

    async function favapicall(params) {
    const responce = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${params}`)
    if (!responce.ok) throw new Error(responce.message);
    const jsondata = await responce.json()
    setFavdata(pre =>
      [...pre, jsondata.data.recipe]
    )
  }

    async function apicall(params) {
        const responce = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${params}`)
        if (!responce.ok) throw new Error(responce.message);
        const jsondata = await responce.json()
        console.log(jsondata)
        setFavdata(pre =>
            [...pre, jsondata.data.recipe]
        )
    }
    
    
    async function detailApicall(id) {
        console.log("apicall")
        const responce = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`)
        if (!responce.ok) throw new Error("");
        const jsondata = await responce.json()
        setitemdetails(jsondata.data.recipe)
    }

    function handleremove(id) {
        const newData = favdata.filter((item) =>
            item.id !== id
        )
        setFavdata(newData)
        const newfav = fav.filter(favid => favid !== id)
        setFav(newfav)
    }

    function addfav(id) {
        if (!fav.includes(id)) {
            setFav(prevFav => [...prevFav, id]);
        } else {
            handleremove(id)
        }
    }


    return (
        <GloableContext.Provider value={{ itemdetal,detailApicall,favapicall, setitemdetails, search, apicall, favdata, setFavdata, addfav, setSearch, data, handleremove, handleSearch, loading, setloading, fav, setFav, error, setError }}>
            {children}
        </GloableContext.Provider>
    )
}

export function ConsumeContext() {
    return useContext(GloableContext)
}