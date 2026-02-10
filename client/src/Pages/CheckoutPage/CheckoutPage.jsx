import CheckoutPageHeader from "../../components/CheckoutPageHeader/CheckoutPageHeader"
import ReviewOrderSection from "../../components/ReviewOrderSection/ReviewOrderSection"
import PaymentSummarySection from "../../components/PaymentSummarySection/PaymentSummarySection"

function CheckoutPage() {

    return (
        <>
            <CheckoutPageHeader />
            <div className="d-flex flex-column flex-lg-row gap-4 m-5 justify-content-evenly align-items-stretch w-100">
                <ReviewOrderSection />
                <PaymentSummarySection />
            </div>

        </>
    )
}

export default CheckoutPage