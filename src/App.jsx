import About from "./compenents/About"
import Choose from "./compenents/Choose"
import Footer from "./compenents/Footer"
import Hanch from "./compenents/Hanch"
import Hero from "./compenents/Hero"
import Nav from "./compenents/Nav"
import Vide from "./compenents/Vide"

function App() {

  return (
<div className="bg-[#FFF2D7] font-sans ">
  <Nav/>
  <Hero/>
  <Choose/>
  <Hanch/>
  <About/>
  <Vide/>

  <Footer/>

</div>   
  )
}

export default App
