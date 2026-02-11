import products from "../data/products.js"

export function getProducts(req, res) {
    res.json(products)
}