

import logo from'../assets/carrito-de-compras.png'
import "./style.css";

const CartWidget = () => {
  return (
    <div className='menu_navbar_logo'>
      <img className='menu-navbar-img' src={logo} alt='cart widget'/>
    </div>
  )
}

export default CartWidget
