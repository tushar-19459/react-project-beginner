import { useEffect, useState } from "react"
import UseFetch from "./UseFetch"

export default function Weather({ url, apikey }) {

    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const [weatherdata, setData] = useState(null)
    const [search, setSearch] = useState('karkala')

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const today = new Date()
    const month = today.getMonth()
    const date = today.getDate()
    const day = today.getDay()
    const year = today.getFullYear()

    async function apicall() {
        try {
            setLoading(true)
            const responce = await fetch(`${url}${search}&appid=${apikey}`)
            if (!responce.ok) throw new Error(responce.statusText);
            const data = await responce.json()
            setData(data)
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        apicall()
    }, [])

    if (loading) {
        return (
            <div className="box">
                <div className="main">
                    <div className="info-body">
                        <h1>Loading...</h1>
                    </div>
                </div>
            </div>
        )
    }
   
    if (error) {
        return (
            <div className="box">
                <div className="main">
                    <div className="search-box">
                        <input type="text" placeholder="enter city name" onChange={(e) => setSearch(e.target.value)} />
                        <button type="button" onClick={handleSearch}>Search</button>
                    </div>
                    <div className="info-body">
                        <h1>{error.message}</h1>
                    </div>
                </div>
            </div>
        )
    }

    function handleSearch(event) {
        event.preventDefault()
        apicall()
    }

    return (
        <>
            {weatherdata && weatherdata.main &&
                <div className="box">
                    <div className="main">
                        <div className="search-box">
                            <form onSubmit={handleSearch}>
                            <input type="text" placeholder="enter city name" onChange={(e) => setSearch(e.target.value)} />
                            <button type="button" onClick={handleSearch}>Search</button>
                            </form>
                        </div>
                        <div className="info-body">
                            <h3>{weatherdata.name} , {weatherdata.sys.country}</h3>
                            <p>{days[day]} , {months[month]} {date} {year}</p>
                            <h3>{weatherdata.main.temp}</h3>
                            <p>{weatherdata.weather[0].main}</p>
                            <div className="end-box"><div className="left"><h2>{weatherdata.main.humidity}% </h2>Humidity</div><div className="right"><h2>{weatherdata.wind.speed}m/s</h2>WindSpeed</div></div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}