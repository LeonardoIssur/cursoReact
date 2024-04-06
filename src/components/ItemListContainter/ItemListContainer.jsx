import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { useNotification } from '../hooks/useNotification'

import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const { categoryId } = useParams()

    const { showNotification } = useNotification()

    useEffect(() => {

        const productsCollection = categoryId ? (
            query(collection(db, 'products'), where('category', '==', categoryId))
        ) : (
             collection(db, 'products')
        )

        getDocs(productsCollection)
            .then(querySnapshot => {
               const productsAdapted = querySnapshot.docs.map(doc => {

                const data = doc.data()

                return{ id: doc.id, ...data}
               })
               setProducts(productsAdapted)
            })
            .catch(() => {
                showNotification('error', 'hubo un error al cargar los datos')
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