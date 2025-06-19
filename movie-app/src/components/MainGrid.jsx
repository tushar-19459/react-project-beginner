import { UseContext } from "../context/context"
import { useNavigate } from "react-router-dom"
import { GoHeartFill } from "react-icons/go";
import { useDispatch, useSelector } from 'react-redux';
import { addtoFav } from "../Store/favorites/FavoritesSlice";
import Loading from "./Loading";

const MainGrid = ({ data }) => {

  const { loading, error, show, scroll, setShow, setDetails, } = UseContext()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const favitems = useSelector(state => state.favorite)

  function getDetail(item) {
    setShow(true)
    setDetails(item)
    navigate("/details")
  }

  function handlelike(e, item) {
    e.stopPropagation()
    dispatch(addtoFav(item))
    console.log("click")
  }


  if(error){
    return <Error message={error.message}></Error>
  }

  return (
    <div >
      <div className="grid  grid-cols-4 bg-[#222831] max-md:grid-cols-2">
        {loading ? <Loading></Loading> : data?.map((item) =>
          <div onClick={() => getDetail(item)} key={item.id} className="relative m-3 z-0 border font-bold hover:border-[#00ADB5] animate  hover:shadow-[#95eaef83]  hover:shadow-lg bg-black text-white rounded-xl">
            <div className=" rounded-xl  ">
              <div className="flex justify-end w-full "><GoHeartFill onClick={(e) => handlelike(e, item)} className={`${favitems.some((movie) => movie.id === item.id) ? 'text-red-500' : 'text-gray-500'}   absolute  z-50 m-3  justify-self-end text-gray-500 `} size={30} /></div>
              <img className="object-cover object-center  rounded-xl" src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="" />
              <div className="flex flex-col  m-2  justify-center">
                <div className="flex items-center place-content-between px-3">
                  <p>{item.title}</p>
                  <p>⭐{item.vote_average.toFixed(1)}</p>
                </div>
                <div className="px-3">{item.release_date}</div>
              </div>
            </div>
          </div>
        )}
        
        {error ? <div>Error {error}</div> : null}

      </div>
    </div>
  )
}

export default MainGrid
