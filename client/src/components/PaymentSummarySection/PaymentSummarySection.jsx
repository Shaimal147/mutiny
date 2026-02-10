import './PaymentSummarySection.css'

function PaymentSummarySection() {

    return (
        <div className="card" style={{width: '18rem', height: '18rem'}}>
            <div className="card-body">
                <h5 className="card-title">Payment Summary</h5>
                <div className="card-text">
                    <p>Items 0:</p>
                    <p>Shipping & handling:</p>
                    <p>Total before tax:</p>
                    <p>Estimated tax (10%):</p>
                </div>
                <a href="#" className="btn btn-secondary">Place your order</a>
            </div>
        </div>
    )
}

export default PaymentSummarySection