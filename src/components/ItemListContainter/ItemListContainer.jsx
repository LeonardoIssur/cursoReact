import { useState, useEffect } from 'react'
import { getProducts, getProductsByCategory, getProductsById } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {

        const asynFunction = categoryId ? getProductsByCategory : getProducts

        asynFunction(categoryId)
            .then(result => {
                setProducts(result)
            })
            .catch(error => {
                console.log(error)
            })
    }, [categoryId])

    return (
        <main>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </main>
    )
}

export default ItemListContainer