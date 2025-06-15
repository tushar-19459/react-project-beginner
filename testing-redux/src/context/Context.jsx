import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const Context = createContext()

export function ContextProvider({ children }) {
    const [search, setSearch] = useState("")
    const [searchData, setSearchData] = useState()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [data, setdata] = useState()
    const [productDetail, setProductDetail] = useState()

    async function handlesearch(event) {
        try {
            setLoading(true)
            event.preventDefault()
            const responce = await fetch('https://dummyjson.com/products/search?q=' + search)
            if (!responce.ok) throw new Error(responce.statusText)
            const jsondata = await responce.json()
            console.log(jsondata.products.length)
            setSearchData(jsondata.products)
            setSearch('')
            navigate('/search')
        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }

    async function handleProductDetails(id) {
        try {
            setLoading(true)
            console.log("the id is " + id)
            const responce = await fetch(`https://dummyjson.com/products/${id}`)
            if (!responce.ok) throw new Error(responce.statusText)
            const jsondata = await responce.json()
            console.log(jsondata.title)
            setProductDetail(jsondata)
        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }


    async function getdata(data) {
        console.log("getdata")
        try {
            setLoading(true)
            const responce = await fetch('https://dummyjson.com/products')
            console.log(responce)
            if (!responce.ok) throw new Error(responce.statusText);
            const jsondata = await responce.json()
            setdata(jsondata.products)
            console.log(jsondata)
        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <Context.Provider value={{ productDetail, setProductDetail, handleProductDetails, loading, error, data, getdata, search, searchData, handlesearch, setSearch }}>
            {children}
        </Context.Provider>
    )
}

export function ContextConsumer() {
    return useContext(Context)
}