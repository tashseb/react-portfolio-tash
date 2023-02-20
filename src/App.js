import Navbar from "./component/navbar/Navbar"
import Home from "./component/home/Home"
import About from "./component/about/About"
import Work from "./component/work/Work"
import Project from "./component/project/Project"
import Contact from "./component/contact/Contact"
import "./app.scss"


function App() {
  return (
    <div className="app">
      <Navbar />
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
