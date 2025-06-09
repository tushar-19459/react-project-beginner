import UseFetch from "./components/UseFetch"
import Weather from "./components/Weather"
function App() {

  const url = "https://api.openweathermap.org/data/2.5/weather?q="
  const key  = "b436ee397a74e982c73ebe5aee173f5b"

  return (
    <>
     <Weather url={url} apikey={key}></Weather>
    </>
  )
}

export default App
