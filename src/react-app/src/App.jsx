import About from "./components/About"
import Portfolio from "./components/Portfolio"
import Home from "./components/Home"
import NavBar from "./components/NavBar"
import SocialMedia from './components/Social-link'

function App() {
  return (
    <div>
      <NavBar /> 
      <Home /> 
      <About />
      <Portfolio />
      <SocialMedia />
    </div>
  )
 
}

export default App
