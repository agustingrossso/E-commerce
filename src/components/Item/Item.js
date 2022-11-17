import { Link } from "react-router-dom"
import "./style.css";


const Item = ({product}) => {
  return (
    <Link to={`item/${product.id}`}>
      <div className="contenedor" >
        <h2>{product.title}</h2>
        <h2>{product.category}</h2>
              
      </div>
    </Link>
  )
}

export default Item