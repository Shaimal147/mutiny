import express from "express"
import cors from "cors"
import products from "./data/products.js"
import cartItems from "./data/cart-items.js"

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())


app.get("/api/health", (req, res) => {
    res.json({ok: true})
})

app.get("/api/products", (req, res) => {
  res.json(products);
})

app.get("/api/cart", (req, res) => {
  res.json(cartItems);
})

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
})