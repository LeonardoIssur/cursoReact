import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainter/ItemListContainer'
import CarouselFunction from './components/CarouselFunction/CarouselFunction'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { CartProvider } from './components/CartContext/CartContext'
import { NotificationProvider } from './components/Notification/NotificationService' 
import CartView  from './components/CartView/CartView'
import Checkout from './components/Checkout/Checkout'

const App = () => {

  return (
    <>
      <BrowserRouter>
        <NotificationProvider>
          <CartProvider>
              <Navbar />
              <CarouselFunction />
              <Routes>
                <Route path='/' element={<ItemListContainer greeting={'Todas las Categorias'} />} />
                <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Productos de la categoria:'} />} />
                <Route path='/item/:itemId' element={<ItemDetailContainer />} />
                <Route path='/cart' element={<CartView/>}/>
                <Route path='/checkout' element={<Checkout/>}/>
              </Routes>
            </CartProvider>
          </NotificationProvider>
      </BrowserRouter>  
    </>
  );
};

export default App;