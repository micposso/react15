
// function or named import, used where there is multiple exports from a file
import { useGlobalContext } from "../context";
// default import, when a module exports only a single value or function
import logo from '../images/logo.svg'

const NavBar = () => {
  const { openSidebar, openSubMenu, closeSubMenu } = useGlobalContext();
  return(
    <div className="nav-center">
      <div className="nav-header">
        <img src={logo} alt="coding" className="srnav-logo" />
      </div>
      <ul className="nav-link">

      </ul>
    </div>
  )
}

export default NavBar;