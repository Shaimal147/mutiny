import styles from './OrderCard.module.css'

function OrderCard() {

    return (
        <div className="card">
            <h5 className="card-header">Featured</h5>
            <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" className={`btn ${styles["btn-secondary"]}`}>Go somewhere</a>
            </div>
        </div>
    )
}

export default OrderCard