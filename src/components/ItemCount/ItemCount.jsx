import React, { useState } from "react";

const ItemCount = ({ initial = 1, stock, onAdd}) => {
    const [count, setcount] = useState(initial)

    const decrement = () => {
        if (count > 1) {
            setcount(prev => prev - 1)
        }
    }

    const increment = () => {
        if(count < stock) {
            setcount(prev => prev + 1)
        }
    }
    return (
        <article>
            <h3>{count}</h3>
            <button onClick={decrement}> - </button>
            <button onClick={() => onAdd(count)}>Agregar al Carrito</button>
            <button onClick={increment}> + </button>
        </article>
    )
}

export default ItemCount;