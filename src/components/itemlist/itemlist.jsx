import Item from '../Item/Item'
import classes from "../Item/Item.module.css"

const ItemList = ({ products })  => {
    return (
        <div className={classes.cardsContainer}>
            {
                products.map(product => {
                    return (<Item key={product.id} { ... product}/>)
                })
            }
        </div>
    )
}

export default ItemList