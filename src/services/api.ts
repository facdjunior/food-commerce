import axios from 'axios'

import { SnackData } from '../interfaces/SnackData';


axios.defaults.withCredentials = true;

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,

})

const api2 = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL1,
})



export const getBurgers = () => api.get<SnackData[]>('/burgers')
export const getPizzas = () => api.get<SnackData[]>('/pizzas')
export const getBebidas = () => api.get<SnackData[]>('/bebidas')
export const getSobremesas = () => api.get<SnackData[]>('/sobremesas')

export const getZap = () => api2.get('/configuracao')

export default api
