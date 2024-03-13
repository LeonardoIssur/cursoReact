import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainter/ItemListContainer'
import Carousel from './components/Carousel/Carousel'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Carousel/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={'PRIMERA PREENTREGA'}/>} />
          <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Productos de la categoria:'}/>} />
          <Route path='/item/:itemId' element={<ItemDetailContainer/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}


export default App
