import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:3001', // Aqui colocar a URL:porta da aplicação eu utilizei o 3001
})