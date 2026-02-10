import styles from './ProductCard.module.css'
import products from '../../Pages/HomePage/products.js'

function ProductCard() {

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
                            <p>{product.priceCents}</p>
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