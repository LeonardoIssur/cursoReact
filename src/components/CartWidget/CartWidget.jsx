import imgCarrito56px from './assets/imgCarrito56px.png'
import classes from './CartWidget.module.css'

const CartWidget = ()=>{

    return(
        <a>
            <div>
                <img className={classes.imgCart} src= {imgCarrito56px} />
                <p className={classes.counterCart}>0</p>
            </div>
            
        </a>
        
    )
}


export default CartWidget