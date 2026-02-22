import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contect from "./Pages/Contect"
import Error_page from "./Components/Error_page"
import Footer from "./Components/Footer"

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contect' element={<Contect />} />
        <Route path='*' element={<Error_page />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App