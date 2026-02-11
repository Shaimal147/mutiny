import { useState, useEffect } from 'react'
import axios from 'axios'
import HomePageNav from '../../components/HomePageNav/HomePageNav'
import ProductCard from '../../components/ProductCard/ProductCard'
import styles from './HomePage.module.css'

function HomePage() {
    const [products, setProducts] = useState([])
        useEffect(() => {
            async function fetchProducts() {
                try {
                    const res = await axios.get('/api/products')
                    setProducts(res.data)
                } catch (err) {
                    console.log(err)
                }
            }

            fetchProducts()
        }, [])
    

    return (
        <>
            <title>Mutiny - Home</title>
            <HomePageNav />
            <div className={`${styles["product-container"]}`}>
                <ProductCard products={products} />
            </div>
        </>
    )
}

export default HomePage