import { useState, useEffect } from "react"
import { getProducts } from "../../asyncMock"

const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
            .then(result => {
                console.log(result)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    return (
        <div>
            <h1 style={{fontSize:30 , marginTop:50}} >{greeting}</h1>
            <itemlist getProducts={products}/>
            
        </div>
    )
}

export default ItemListContainer