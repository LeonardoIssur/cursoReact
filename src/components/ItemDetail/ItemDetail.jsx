import ItemCount from "../ItemCount/ItemCount";
import classes from "../Item/Item.module.css"

const ItemDetail = ({ id, name, img, price, descripcion, category}) => {
    return (
        <div className={classes.card}>
            <img src={img}/>
            <h2>{name}</h2>
            <p>descripcion: {descripcion}</p>
            <h4>categoria : {category}</h4>
            <h3>Precio: ${price}</h3>
            <ItemCount stock={10}/>
        </div>
    )
}

export default ItemDetail
