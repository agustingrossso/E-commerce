


import logo from'../assets/SunsJust.png'
import CartWidget from '../CartWidget/CartWidget';
import "./style.css";

const NavBar = () => {
  return (
    <div className='menu-navbar-container'>
      <img src={logo} className='menu-title' alt='logo'/>

       <ul className='menu-items'>
        <li>
          <a href='index.js' className='menu-list'>Surfboards</a>
        </li>
        <li>
          <a href='index.js' className='menu-list'>Skate</a>
        </li>
        <li>
          <a href='index.js' className='menu-list'>Accesorios</a>
        </li>
       </ul>

      <CartWidget/>
       
    </div>
  )
}

export default NavBar
