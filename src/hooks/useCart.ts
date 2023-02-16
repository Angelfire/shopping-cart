import { useContext } from 'react'
import { CartContext, ICartContext } from '../context/cart'

export const useCart = (): ICartContext => {
  const context = useContext(CartContext)

  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }

  return context
}
