import { useContext } from "react"
import { CartContext } from "../CartContext/CartContext"
import { Link } from "react-router-dom"


const CartView = () => {
    const { cart, removeItem } = useContext(CartContext)
    return (
         <div>
            <h1>Cart</h1>
            <section>
                {
                    cart.map(prod =>{
                        return (
                            <article key={prod.id}>
                                <h2>{prod.name}</h2>
                                <button onClick={() => removeItem(prod.id)}>eliminar</button>
                            </article>
                        )
                    })
                }
            </section>
            <Link to='/checkout'>Checkout</Link>
         </div>
    )
}
export default CartView