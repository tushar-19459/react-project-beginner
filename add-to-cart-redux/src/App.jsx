import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Details from "./pages/Details/Details";
import Cart from "./pages/Cart/Cart";

export default function App() {
  return (
    <Routes>
      <Route to="/" element={<Home></Home>} />
      <Route to="/details" element={<Details></Details>} />
      <Route to="/cart" element={<Cart></Cart>} />
    </Routes>
  )
}