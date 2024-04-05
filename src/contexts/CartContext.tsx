import { createContext, ReactNode, useState } from "react";

import { SnackData } from "../interfaces/SnackData";

interface Snack extends SnackData {
  quatidade: number
  subtotal: number
}

interface removeSnackFromCartProps {
  id: number
  snack: string
}

interface UpdateCartProps {
  id: number
  snack: string
  newQuantidade: number
}


interface CartContextProps {
  cart: Snack[]
  addSnackIntoCart: (snack: SnackData) => void
  // removeSnackFromCart: ({ id, snack }: removeSnackFromCartProps) => void
  // updateCart: ({ id, snack, newQuantidade }: UpdateCartProps) => void
}

interface CartProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextProps)

export function CartProvider({ children }: CartProviderProps) {

  const [cart, setCart] = useState<Snack[]>([])

  function addSnackIntoCart(snack: SnackData): void {

    const newSnack = { ...snack, quantidade: 1, subtotal: snack.price }
    const newCart = [...cart, newSnack ]

    setCart(newCart)
  }

  return(
    <CartContext.Provider value={{cart, addSnackIntoCart}}>{children}</CartContext.Provider>
  )
}
