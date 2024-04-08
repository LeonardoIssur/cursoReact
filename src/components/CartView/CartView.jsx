import { useContext } from "react"
import { CartContext } from "../CartContext/CartContext"
import { Link } from "react-router-dom"
import classes from './CartView.module.css'
import imgX from './assets/x_icon.png'
import imgCheckout from './assets/imgCheckout.png'


const CartView = () => {
    const { cart, removeItem, total } = useContext(CartContext)
    return (
         <div>
            <h1>Cart</h1>
            <section>
                {
                    cart.map(prod =>{
                        return (
                            <article key={prod.id}>
                                <div className={classes.cartView}>
                                    <h2>{prod.name}</h2>
                                    <h3>Price ${prod.price}</h3>
                                    <button  className={classes.btnCartView} onClick={() => removeItem(prod.id)}><img className={classes.CartViewBtn} src={imgX} alt="" /></button>
                                </div>
                            </article>
                        )
                    })
                }
            </section>
            <div className={classes.ContainerTotalCheckout}>
                <Link className={classes.linkCheckout} to='/checkout'>Checkout<img className={classes.linkCheckoutImg} src={imgCheckout} alt="" /></Link>
                <h2>TOTAL = ${total}</h2>
            </div>
         </div>
    )
}
export default CartView