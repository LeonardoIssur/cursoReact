const products = [
    {
        id: '1',
        name: 'good of war ragnarok',
        price: '300',
        category: 'aventuras',
        img: 'https://media.revistagq.com/photos/613b43731df3ece1388a2f67/1:1/w_689,h_689,c_limit/God-of-War-Ragnarok-Featured-image.jpeg',
        stock: 25,
        descripcion: 'Años después de cobrarse venganza de los dioses del Olimpo, Kratos ahora lleva la vida de un hombre común en el reino de las deidades y los monstruos nórdicos.'
    },
    {
        id: '2',
        name: 'Spider-Man: Miles Morales',
        price: '300',
        category: 'aventuras',
        img: 'https://media.tycsports.com/files/2022/11/19/506646/marvels-spider-man-miles-morales-llego-a-pc_1440x810_wmk.webp',
        stock: 25,
        descripcion: '¡Acompaña a Miles Morales en su viaje para convertirse en el nuevo Spider-Man!',
      },
      {
        id: '3',
        name: 'Gran Turismo 7',
        price: '300',
        category: 'carreras',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDXRcNCGy6DWj1uok4n5tAC1Lbrss8sfJAfw&usqp=CAU',
        stock: 25,
        descripcion: 'Experimenta la emoción de las carreras con gráficos realistas y una amplia selección de autos.',
      },
      {
        id: '4',
        name: 'Final Fantasy VII Remake Intergrade',
        price: '300',
        category: 'juegos de rol',
        img: 'https://img.asmedia.epimg.net/resizer/v2/32KMAJBMGBKFTC62OGUGOXIBAE.jpg?auth=aedbdac919d5a54418835aa5ebd2886a3e966932b39e2f3cb7735252902dfc2f&width=1472&height=828&smart=true',
        stock: 25,
        descripcion: 'Revive la épica historia de Cloud Strife en este remake mejorado para PlayStation 5.',
      },
      {
        id: '5',
        name: 'Ratchet & Clank: Rift Apart',
        price: '300',
        category: 'aventuras',
        img: 'https://cdn.akamai.steamstatic.com/steam/apps/1895880/extras/SteamXPSNy_Beauty_Shoty_1x1y_610x610.jpg?t=1700663043',
        stock: 25,
        descripcion: 'Explora mundos de alta velocidad con Ratchet y su compañero robot Clank.',
      },
      {
        id: '6',
        name: 'Demon\'s Souls',
        price: '300',
        category: 'aventuras',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQLXL7ngCEBeeThFQNP2INo-uCODBIfaN4Xw&usqp=CAU',
        stock: 25,
        descripcion: 'Revive la magia del juego original, reconstruido desde cero en PlayStation 5.',
      },
      {
        id: '7',
        name: 'Resident Evil Village',
        price: '300',
        category: 'aventuras',
        img: 'https://image.api.playstation.com/vulcan/ap/rnd/202101/0812/FkzwjnJknkrFlozkTdeQBMub.png',
        stock: 25,
        descripcion: 'Enfréntate a horrores grotescos en una aldea aislada en este juego de la serie Resident Evil.',
      },
      {
        id: '8',
        name: 'Horizon Forbidden West',
        price: '300',
        category: 'aventuras',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU88lVbXV3QFB0Gg9owxGbtwI7jSzQLhyp4xAA9GKLYAtdJraXpsKYbJTCBxAAlKIX67c&usqp=CAU',
        stock: 25,
        descripcion: 'Acompaña a Aloy en su viaje por un mundo postapocalíptico lleno de criaturas robóticas.',
      },
      {
        id: '9',
        name: 'Returnal',
        price: '300',
        category: 'aventuras',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZKuJzf-xBzmd7CYvCZBp18FQoyn1taG-nBw&usqp=CAU',
        stock: 25,
        descripcion: 'Explora un planeta alienígena y desentraña misterios en este juego de acción y ciencia ficción.',
      },
      {
        id: '10',
        name: 'F1 2021',
        price: '300',
        category: 'carreras',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgKRhnf1Uz5fwqVtHTgZpZ5gBgzWjBEntKMLnDwl6hbcih_5tZJInAdspHCd3ydwKEdQk&usqp=CAU',
        stock: 25,
        descripcion: 'Experimenta la emoción de la Fórmula 1 con equipos oficiales y pistas realistas.',
      },
      {
        id: '11',
        name: 'Cyberpunk 2077',
        price: '300',
        category: 'juegos de rol',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5UpvfCuJ8tJMei0YmoWow-WzlKIUHZFpB_A&usqp=CAU',
        stock: 25,
        descripcion: 'Adéntrate en Night City y vive una historia futurista llena de decisiones y consecuencias.',
      },
      {
        id: '12',
        name: 'Assassin\'s Creed Valhalla',
        price: '300',
        category: 'aventuras',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0iw0_bN2eGTlJTEnUpsE__9EuGEPXYLI2pw&usqp=CAU',
        stock: 25,
        descripcion: 'Embárcate en una epopeya vikinga en este título de la famosa serie Assassin\'s Creed.',
      },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 100)
    })
}
export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve(products.filter(prod => prod.category == categoryId))
      }, 100)
  })
}
export const getProductsById = (itemId) => {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve(products.find(prod => prod.id == itemId))
      }, 100)
  })
}
