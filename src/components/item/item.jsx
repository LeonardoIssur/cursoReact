const Item = ({ id, name, img, price}) => {
    return (
        <div>
            <h2>{product.name}</h2>
            <img src={product.img} style={{ width: 100 }} />
            <h3>Precio: ${product.price}</h3>
        </div>
    )
}

export default Item