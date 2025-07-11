import NavBar from '../components/NavBar'
import MainGrid from '../components/MainGrid'
import { useSelector } from 'react-redux'
const Favorites = () => {

  const favitems = useSelector(state=>state.favorite)

  console.log(favitems)

  return (
    <div className=' h-screen overflow-x-hidden bg-[#222831]'>
    <NavBar></NavBar>
    <MainGrid data={favitems}></MainGrid>

    </div>
  )
}

export default Favorites
