import './ProductCard.css'

function ProductCard() {

    return (
        <div className="card" style={{width: '18rem'}}>
            <img src={null} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                <button className="btn btn-outline-secondary btn-glass">
                    <i className="bi bi-cart-plus"></i>
                </button>
            </div>
        </div>
    )
}

export default ProductCard