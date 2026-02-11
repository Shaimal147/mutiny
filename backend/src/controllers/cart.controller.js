import cartItems from "../data/cart-items.js"

export function getCart(req, res) {
    res.json(cartItems)
}