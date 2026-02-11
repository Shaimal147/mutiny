import { Router } from 'express'
import { getProducts } from '../controllers/products.controller.js'

const route = Router()

route.get("/products", getProducts)

export default route