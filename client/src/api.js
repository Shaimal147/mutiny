import axios from 'axios'

export async function fetchCartItems(callback) {
            try {
                const res = await axios.get("/api/cart")
                callback(res.data)
            } catch (err) {
                console.log(err)
            }
        }

export async function fetchProducts(callback) {
                try {
                    const res = await axios.get('/api/products')
                    callback(res.data)
                } catch (err) {
                    console.log(err)
                }
            }