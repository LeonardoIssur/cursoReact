import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { CartContext } from "../CartContext/CartContext";
import classes from './ItemDetail.module.css';
import imgVisa from './assets/img-visa.svg'
import imgMasterCard from './assets/img-masterCard.svg'
import imgAmerican from './assets/img-americanExpress.svg'
import { useNotification } from '../hooks/useNotification'

const ItemDetail = ({ id, name, img, price, descripcion, category, stock}) => {

    const [quantity, setQuantity] = useState(0)

    const {addItem} = useContext(CartContext)

    const { showNotification } = useNotification()

    const handleOnAdd = (count) => {
        const objProductToAdd = {
            id, name, price, count
        }
        showNotification ('success' , `Se agrego correctamente ${name}s al carrito`)

        setQuantity(count)

        addItem(objProductToAdd)
    }

    return (
        <div className={classes.itemDetailContainer}>
            <div className={classes.itemDetailImg}>
                <img src={img}/>
            </div>  
            <div className={classes.infoContainer}>
                <div className={classes.info}>
                    <h2>{name}</h2>
                    <p>Descripcion: {descripcion}</p>
                    <h4>Categoria : {category}</h4>
                    <h3>${price}</h3>
                    <p className={classes.pDescuento}>en descuento de un 20%</p>
                    <ItemCount stock={stock} onAdd={handleOnAdd}/>
                    <h5>Stock disponible ({stock})</h5><p> Almacenado y empaquetado por Servientrega</p>
                </div> 
                <div className={classes.infoMetodosDePago}>
                    <h4>Medios de Pago</h4>
                    <button className={classes.btnPagos}>! Paga en Hasta 12 cuotas sin interes ¡</button>
                    <h5>Tarjetas de credito</h5>
                    <div className={classes.iconsMetodosDePago}>
                        <img src={imgVisa} alt="" />
                        <img src={imgMasterCard} alt="" />
                        <img src={imgAmerican} alt="" />
                    </div>
                    <h5>Tarjetas de dedito</h5>
                    <div className={classes.iconsMetodosDePago}>
                        <img src={imgVisa} alt="" /><h6>debito</h6>
                        <img src={imgMasterCard} alt="" /><h6>debito</h6>
                    </div>
                    <a href="">Ver mas metodos de pagos</a>   
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
