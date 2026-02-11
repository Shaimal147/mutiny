import { NavLink } from 'react-router'
import { Fragment } from 'react'
import styles from './ReviewOrderSection.module.css'

function ReviewOrderSection({cartItems}) {
    const cartSectionText = cartItems.length === 0 ? 'Your cart is empty.' : 'Review your order'

    return (
        <div className="card" style={{width: '18rem', height: '20rem'}}>
            <div className="card-body">
                <h5 className="card-title">{cartSectionText}</h5>
                {cartItems.map((item) => {
                    return (
                        <Fragment key={item.cartItemId}>
                            <img src={item.image} alt="Image of product" width={100} />
                            <p className="card-text">{item.name}</p>
                            <p className="card-text">Quantity: {item.quantity}</p>
                            <p className="card-text">Total Price: ${(item.totalPriceCents / 100).toFixed(2)}</p>
                        </Fragment>
                    )
                })}   
                <a href="#" className={`btn ${styles["btn-secondary"]}`}>View products</a>
            </div>
        </div>
    )
}

export default ReviewOrderSection