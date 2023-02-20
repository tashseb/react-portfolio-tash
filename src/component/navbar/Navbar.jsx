import './navbar.scss'
import Logo from '../../assets/images/TC-logo-light.png'

export default function Navbar() {
  return(
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <a href="#home" className="logo">
            <img src={Logo} alt="tashika" />
          </a>
          <div className="itemContainer">

          </div>
        </div>
        <div className="right">

        </div>
      </div>
    </div>
  )
}
