import Item from "../item/item"
import itemlist from "../itemlist"

const itemlist = ([ products]) => {
    return (
        <div>
            {
                products.map(product => {
                    return (<Item key={product.id} { ... product}/>)
                })
            }
        </div>
    )
}

export default itemlist