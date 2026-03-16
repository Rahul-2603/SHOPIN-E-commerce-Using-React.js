import axios from "axios"

const API = axios.create({
  baseURL: "https://dummyjson.com"
})

export const getProducts = () => {
  return API.get("/products?limit=2000")
}

export const getcategories = () => {
  return API.get("/products/categories")
}