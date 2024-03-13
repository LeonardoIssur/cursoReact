import { useState, useEffect } from 'react'
import { getProductsById } from '../../asyncMock.js'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const { itemId } = useParams()

    useEffect(() => {
        getProductsById(itemId)
            .then(result => {
                setProduct(result)
            })
            .catch(error => {
                console.error("Error", error);
            });
    }, [itemId])

    return (
        <main>
            <h1>hola</h1>
            <ItemDetail {...product}/>
        </main>
    )
}

export default ItemDetailContainer