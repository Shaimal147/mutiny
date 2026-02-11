import { useState, useEffect } from 'react'
import styles from './ProductCard.module.css'

function ProductCard() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch("/api/products")
            .then((res) => res.json())
            .then(setProducts)
            .catch(console.error)
    }, [])

    return (
    <>
        {products.map((product) => {
            return (
                <div className="card" style={{width: '18rem'}} key={product.id}>
                    <img src={product.image} className="card-img-top" alt="..." width={100}/>
                    <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <div className="card-text">
                            <p></p>
                            <p>${(product.priceCents / 100).toFixed(2)}</p>
                        </div>
                        <button className={`btn ${styles["btn-outline-secondary"]} ${styles["btn-glass"]}`}>
                            <i className="bi bi-cart-plus"></i>
                        </button>
                    </div>
                </div>
            )
        })}
    </>    
    )
}

export default ProductCard