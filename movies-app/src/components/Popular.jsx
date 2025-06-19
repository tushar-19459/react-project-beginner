import React, { useEffect, useState } from 'react'
import Slide from './Slide'

const Popular = () => {


    const [popularList, setPopularList] = useState()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {

        async function getList() {
            try {
                setLoading(true)
                const authentication = {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZWVlMTRjZGMzNWJlN2QyNDUxMWE2MTcwODMxNmZkZCIsIm5iZiI6MTc0ODY4Nzc0NS45NDEsInN1YiI6IjY4M2FkYjgxMWM5ZTYxMjY4YzdmMzczMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KZhEGgN9z4wvOJ2jVmrxQHb124i-7lQKJpEY8kE5whc',
                    accept: 'application/json'
                }
                const responce = await fetch(
                    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
                    {
                        method: 'GET',
                        headers: authentication
                    }
                )
                if (!responce.ok) throw new Error(responce.statusText)
                const data = await responce.json()
                setPopularList(data.results)
                console.log(data.results)
            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }
        getList()
    }, [])


    return (
        <div className="h-4/5  text-white ">
            <h1 className="text-4xl main-text m-4 animate ">Popular</h1>
            {loading ? <div>Loding...</div> : <Slide data={popularList}></Slide>}
        </div>

    )
}

export default Popular
