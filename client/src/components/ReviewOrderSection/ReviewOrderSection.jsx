import './ReviewOrderSection.css'

function ReviewOrderSection() {

    return (
        <div className="card" style={{width: '18rem', height: '18rem'}}>
            <div className="card-body">
                <h5 className="card-title">Review your order</h5>
                <p className="card-text">Your cart is empty.</p>
                <a href="#" className="btn btn-secondary">View products</a>
            </div>
        </div>
    )
}

export default ReviewOrderSection