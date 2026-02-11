import { useState, useEffect } from 'react' 
import { fetchCartItems } from '../../api'
import CheckoutPageHeader from "../../components/CheckoutPageHeader/CheckoutPageHeader"
import ReviewOrderSection from "../../components/ReviewOrderSection/ReviewOrderSection"
import PaymentSummarySection from "../../components/PaymentSummarySection/PaymentSummarySection"

function CheckoutPage() {
    const [cartItems, setCartItems] = useState([])
    useEffect(() => {
        fetchCartItems(setCartItems)
    }, [])

    return (
        <>
            <title>Mutiny - Checkout</title>
            <CheckoutPageHeader />
            <div className="d-flex flex-column flex-lg-row gap-4 m-5 justify-content-evenly align-items-stretch w-100">
                <ReviewOrderSection cartItems={cartItems} />
                <PaymentSummarySection />
            </div>

        </>
    )
}

export default CheckoutPage