 // import './App.css';
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainter/ItemListContainer'
import { getProducts } from './asyncMock'

function App() {

  return (
    <>
      <Navbar />
      <ItemListContainer greeting='PRIMERA PREENTREGA'/>
      <getProducts/>
    </>
  )
}


export default App
