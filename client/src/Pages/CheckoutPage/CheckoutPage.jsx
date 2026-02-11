import { useState, useEffect } from 'react' 
import axios from 'axios'
import CheckoutPageHeader from "../../components/CheckoutPageHeader/CheckoutPageHeader"
import ReviewOrderSection from "../../components/ReviewOrderSection/ReviewOrderSection"
import PaymentSummarySection from "../../components/PaymentSummarySection/PaymentSummarySection"

function CheckoutPage() {
    const [cartItems, setCartItems] = useState([])
    useEffect(() => {
        async function fetchCartItems() {
            try {
                const res = await axios.get("/api/cart")
                setCartItems(res.data)
            } catch (err) {
                console.log(err)
            }
        }

        fetchCartItems()
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