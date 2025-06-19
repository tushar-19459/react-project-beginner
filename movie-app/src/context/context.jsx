import React, { createContext, useContext, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const context = createContext()

export function ProvideContext({ children }) {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [data, setData] = useState()
    const [details, setDetails] = useState()
    const [show, setShow] = useState(false)
    const [page, setPage] = useState(1)
    const [totalPage, setTotalPage] = useState(100)
    const [search, setSearch] = useState("")
    const [filterdata, setFilterData] = useState([])
    const navigate = useNavigate()
    const scroll = useRef()



    async function searchFor(text) {
        console.log("searching for " + text);
        try {
            setLoading(true);
            setFilterData([]);

            let index = 1;
            let collectedResults = [];

            while (index <= 100) {
                const response = await fetch(
                    `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${index}&sort_by=popularity.desc`,
                    {
                        method: "GET",
                        headers: {
                            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZWVlMTRjZGMzNWJlN2QyNDUxMWE2MTcwODMxNmZkZCIsIm5iZiI6MTc0ODY4Nzc0NS45NDEsInN1YiI6IjY4M2FkYjgxMWM5ZTYxMjY4YzdmMzczMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KZhEGgN9z4wvOJ2jVmrxQHb124i-7lQKJpEY8kE5whc",
                            accept: "application/json"
                        }
                    }
                );

                if (!response.ok) throw new Error(response.statusText);

                const jsonData = await response.json();
                const newdata = jsonData.results.filter((item) =>
                    item.title?.toLowerCase().includes(String(text).toLowerCase())
                );

                collectedResults.push(...newdata);
                index++;
            }

            setFilterData(collectedResults);
        } catch (error) {
            // setError(error.message);
        } finally {
            setLoading(false);
        }
    }


    function handleSearch(e) {
        e.preventDefault();
        navigate(`/search/${search}`)
        searchFor(search)
        setSearch("")
    }

    async function apicall(page) {
        try {
            setLoading(true)
            const responce = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`,
                {
                    method: "GET",
                    headers: {
                        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZWVlMTRjZGMzNWJlN2QyNDUxMWE2MTcwODMxNmZkZCIsIm5iZiI6MTc0ODY4Nzc0NS45NDEsInN1YiI6IjY4M2FkYjgxMWM5ZTYxMjY4YzdmMzczMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KZhEGgN9z4wvOJ2jVmrxQHb124i-7lQKJpEY8kE5whc",
                        accept: "application/json"
                    }
                }
            )
            if (!responce.ok) throw new Error(responce.statusText)
            const jsonData = await responce.json()

            setData(jsonData.results)
        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }


    return (
        <context.Provider value={{ details, setDetails, show, setShow, loading, setLoading, filterdata, searchFor, error, setError, data, setData, apicall, page, setPage, totalPage, search, setSearch, handleSearch, scroll }}>
            {children}
        </context.Provider>
    )
}

export function UseContext() {
    return useContext(context)
}