import React, { useState } from "react";
import classes from './ItemCount.module.css'

const ItemCount = ({ initial = 1, stock, onAdd}) => {
    const [count, setcount] = useState(initial)

    const decrement = () => {
        if (count > 1) {
            setcount(count => count - 1)
        }
    }

    const increment = () => {
        if(count < stock) {
            setcount(prev => prev + 1)
        }
    }
    return (
        <article className={classes.btnsItemCountContainer}>
            <div className={classes.btnsItemCount}>
                <button onClick={decrement}> - </button>
                <h3>{count}</h3>
                <button onClick={increment}> + </button>
            </div>
            <button className={classes.btnAgregarAlCarrito} onClick={() => onAdd(count)}>Agregar al Carrito</button>
        </article>
    )
}

export default ItemCount;
