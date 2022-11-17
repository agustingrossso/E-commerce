import { Link, NavLink } from "react-router-dom"


import logo from'../../assets/SunsJust.png'
import Cart from '../../Pages/Cart/Cart'
import "./style.css";

const NavBar = () => {
  return (
    <div className='menu-navbar-container'>

      <Link to ='/'><img src={logo} className='menu-title' alt='logo'/></Link>
      

       <ul className='menu-items'>
        <li>
        <NavLink 
                    to='/'
                    className={({ isActive }) => (isActive ? 'active' : 'inactive') }
                 >
          Tienda
          </NavLink>
        </li>
        <li>
        <NavLink 
                    to='/category/surfBoards'
                    className={({ isActive }) => (isActive ? 'active' : 'inactive') }
                 >
          SurfBoards
          </NavLink>
        </li>
        <li>
        <NavLink 
                    to='/category/skate'
                    className={({ isActive }) => (isActive ? 'active' : 'inactive') }
                 >
          Skate
          </NavLink>
        </li>
       </ul>
       <Link to="/Cart"><Cart/></Link>
 
    </div>
  )
}

export default NavBar
