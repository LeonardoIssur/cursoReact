import ItemCount from "../ItemCount/ItemCount";
import classes from "../Item/Item.module.css"

const ItemDetail = ({ name, img, price, descripcion, category, stock}) => {

    const handleOnAdd = (quantity) => {
        console.log('cantidad de el producto: ' + quantity)
    }

    return (
        <div className={classes.card}>
            <img src={img}/>
            <h2>{name}</h2>
            <p>descripcion: {descripcion}</p>
            <h4>categoria : {category}</h4>
            <h3>Precio: ${price}</h3>
            <ItemCount stock={stock} onAdd={handleOnAdd}/>
        </div>
    )
}

export default ItemDetail
