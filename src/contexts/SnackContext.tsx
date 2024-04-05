import { createContext, useState, useEffect, ReactNode } from 'react'

import { SnackData } from '../interfaces/SnackData'

import { getBurgers, getPizzas, getBebidas, getSobremesas } from '../services/api'

interface SnackContextProps {

  burgers: SnackData[]
  pizzas: SnackData[]
  bebidas: SnackData[]
  sobremesas: SnackData[]

}

interface SnackProviderProps {
  children: ReactNode;
}

export const SnackContext = createContext({} as SnackContextProps)

export function SnackProvider({ children }: SnackProviderProps) {

  const [burgers, setBurgers] = useState<SnackData[]>([])
  const [pizzas, setPizzas] = useState<SnackData[]>([])
  const [bebidas, setBebidas] = useState<SnackData[]>([])
  const [sobremesas, setSobremesas] = useState<SnackData[]>([])

  useEffect(() => {
    (async () => {

      try {

        const burgerRequest = await getBurgers()
        const pizzaRequest = await getPizzas()
        const bebidasRequest = await getBebidas()
        const sobremesasRequest = await getSobremesas()

        const requests = [burgerRequest, pizzaRequest, bebidasRequest, sobremesasRequest]

        const [
          { data: burgerResponse },
          { data: pizzaResponse },
          { data: bebidaResponse },
          { data: sobremesaResponse },
        ] = await Promise.all(requests)

        setBurgers(burgerResponse)
        setPizzas(pizzaResponse)
        setBebidas(bebidaResponse)
        setSobremesas(sobremesaResponse)

      } catch (error) {
        console.error(error)
      }

    })()
  }, [])

  return (

    <SnackContext.Provider value={{ burgers, pizzas, bebidas, sobremesas }}>
      {children}
    </SnackContext.Provider>

  )
}

