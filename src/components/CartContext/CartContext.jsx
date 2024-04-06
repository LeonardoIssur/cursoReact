import { useState, createContext } from 'react'
import { useNotification } from '../hooks/useNotification'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const { showNotification } = useNotification()
    const [cart, setCart] = useState([])
  
    const addItem = (productToAdd) => {
      if(!isInCart(productToAdd.id)) {
        setCart(prev => [...prev, productToAdd])
      } else {
        showNotification('error', 'El producto ya esta agregado')
      }
    }
  
    const isInCart = (id) => {
      return cart.some(prod => prod.id === id)
    }
  
    const clearCart = () => {
      setCart([])
    }

    const removeItem = (id) => {
      const updatedCart = cart.filter(prod => prod.id !== id)
      setCart(updatedCart)
    }

    const getTotalQuantity = () => {
      let acumulador = 0
  
      cart.forEach(prod => {
        acumulador += prod.quantity
      })
  
      return acumulador
    }
  
    const totalQuantity = getTotalQuantity()

    const getTotal = () => {
      let acumulador = 0
  
      cart.forEach(prod => {
        if (prod.quantity && !isNaN(prod.quantity)){
          acumulador += prod.quantity * prod.price
        }
        
      })
  
      return acumulador
    }
  
    const total = getTotal()

    return (
        <CartContext.Provider value={{cart, addItem, totalQuantity, total, clearCart, isInCart, removeItem}}>
            {children}
        </CartContext.Provider>
    )
}