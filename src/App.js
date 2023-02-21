import Navbar from "./component/navbar/Navbar"
import Home from "./component/home/Home"
import About from "./component/about/About"
import Work from "./component/work/Work"
import Project from "./component/project/Project"
import Contact from "./component/contact/Contact"
import "./app.scss"
import { useState } from "react"


function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="app">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Home />
        <About />
        <Work />
        <Project />
        <Contact />
      </div>
    </div>
  );
}

export default App;
