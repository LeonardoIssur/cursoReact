import { Link } from "react-router-dom"
import classes from "./Item.module.css"

const Item = ({ id, name, img, price}) => {
    return (
        <div className={classes.card}>
            <img className={classes.imgCard} src={img}/>
            <h2>{name}</h2>
            <h3>Precio: ${price}</h3>
            <Link  className={classes.btnCard} to={`/item/${id}`} >Ver Detalles</Link>
        </div>
    )
}

export default Item