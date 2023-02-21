import './navbar.scss'
import {} from "@material-ui/icons"
// import Logo from '../../assets/images/TC-logo-light.png'

export default function Navbar({ menuOpen, setMenuOpen }) {
  return(
    <div className={"navbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#home" className="logo">TC</a>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
