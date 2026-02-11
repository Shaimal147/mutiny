import { useState, useEffect } from 'react'
import HomePageNav from '../../components/HomePageNav/HomePageNav'
import ProductCard from '../../components/ProductCard/ProductCard'
import styles from './HomePage.module.css'

function HomePage() {
    const [products, setProducts] = useState([])
        useEffect(() => {
            fetch("/api/products")
                .then((res) => res.json())
                .then(setProducts)
                .catch(console.error)
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