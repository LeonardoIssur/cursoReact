const products = [
    {
        id: '1',
        name: 'good of war ragnarok',
        price: '300',
        categoria: 'aventuras',
        img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fcodigoespagueti.com%2Fresenas%2Fresena-god-of-war-ragnarok-lucha-contra-tu-destino%2F&psig=AOvVaw2lIlJxAVpe7UGE0H7LU0cV&ust=1709671093855000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJjy6aO724QDFQAAAAAdAAAAABAE',
        stock: 25,
        descripcion: 'Años después de cobrarse venganza de los dioses del Olimpo, Kratos ahora lleva la vida de un hombre común en el reino de las deidades y los monstruos nórdicos.'
    },
    {id: '2', name: 'good of war ragnarok', price: '300', categoria: 'aventuras', img: '', stock: 25, descripcion: 'Años después de cobrarse venganza de los dioses del Olimpo, Kratos ahora lleva la vida de un hombre común en el reino de las deidades y los monstruos nórdicos.'},
    {id: '3', name: 'good of war ragnarok', price: '300', categoria: 'aventuras', img: '', stock: 25, descripcion: 'Años después de cobrarse venganza de los dioses del Olimpo, Kratos ahora lleva la vida de un hombre común en el reino de las deidades y los monstruos nórdicos.'},

]

 export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}