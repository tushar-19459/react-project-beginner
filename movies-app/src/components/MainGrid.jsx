import React, { useEffect, useState } from 'react'

const MainGrid = () => {

  const [MainList, setMainList] = useState()
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
          "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=10&sort_by=popularity.desc",
          {
            method: 'GET',
            headers: authentication
          }
        )
        if (!responce.ok) throw new Error(responce.statusText)
        const data = await responce.json()
        setMainList(data.results)
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
   <div className="min-h-screen bg-[#222831]">
  <h1 className="text-4xl main-text m-4 animate font-oxanium font-bold text-white">Movies</h1>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 pb-8">
    {MainList?.map((item, index) => (
      <div
        key={index}
        className="bg-[#393E46] rounded-2xl shadow-md hover:shadow-[#00ADB5] hover:border-[#00ADB5] border transition-all duration-300"
        style={{ height: "450px" }} // fixed card height
      >
        <div className="h-3/4 p-3">
          <img
            src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
            alt={item.title}
            className="object-cover w-full h-full rounded-2xl"
          />
        </div>

        <div className="h-1/4 px-4 pb-3 text-white font-oxanium font-bold">
          <div className="flex items-center justify-between">
            <p className="truncate text-lg">{item.title}</p>
            <p className="text-sm">⭐ {item.vote_average.toFixed(1)}</p>
          </div>
          <p className="text-sm text-gray-400">{item.release_date.substring(0, 4)}</p>
        </div>
      </div>
    ))}
  </div>
</div>

  )
}

export default MainGrid
