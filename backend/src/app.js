import express from "express"
import cors from "cors"
import healthRoutes from "./routes/health.routes.js"
import productsRoutes from "./routes/products.routes.js"
import cartRoutes from './routes/cart.routes.js'

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api", healthRoutes)
app.use("/api", productsRoutes)
app.use("/api", cartRoutes)

export default app