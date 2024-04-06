import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import classes from '../ItemDetailContainer/ItemDetailContainer.module.css'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const { itemId } = useParams()

    useEffect(() => {
        const productDoc = doc(db, 'products', itemId)

        getDoc(productDoc)

            .then(queryDocumentSnapshot => {
                console.log(queryDocumentSnapshot)
                const data = queryDocumentSnapshot.data()
                const productsAdapted = { id: queryDocumentSnapshot.id, ...data}

                setProduct(productsAdapted)
            })
            .catch()

    }, [itemId])

    return (
        <main>
            <div className={classes.containerTexto}><p className={classes.textoDeslizante}>¡Oferta increíble! Descuenta un 20% en todos los videojuegos. ¡No te pierdas la oportunidad de jugar más por menos! Descubre la selección más amplia de títulos y disfruta de horas interminables de diversión.</p></div>
            <ItemDetail {...product}/>
        </main>
    )
}

export default ItemDetailContainer