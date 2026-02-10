import OrderCard from "../../components/OrderCard/OrderCard";
import OrdersPageNav from "../../components/OrdersPageNav/OrdersPageNav";

function OrdersPage() {

    return (
        <>
            <title>Mutiny - Orders</title>
            <OrdersPageNav />
            <h1>Your Orders</h1>
            <div>
                <OrderCard />
            </div>
        </>
    )
}

export default OrdersPage