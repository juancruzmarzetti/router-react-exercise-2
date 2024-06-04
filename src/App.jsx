import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"

function App() {
  return (
    <>
      <Navbar/>
      <div>
        <h1>Mas que solo bebidas, festejemos el encuentro.</h1> 
      </div>
      <Outlet/>
   </>
  )
}

export default App
