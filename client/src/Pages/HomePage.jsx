import Nav from '../components/Nav'
import ProductCard from '../components/ProductCard'
import './HomePage.css'

function HomePage() {

    return (
        <>
            <Nav />
            <div className="product-container">
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </>
    )
}

export default HomePage