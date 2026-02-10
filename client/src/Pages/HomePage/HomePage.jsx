import HomePageNav from '../../components/HomePageNav/HomePageNav'
import ProductCard from '../../components/ProductCard/ProductCard'
import './HomePage.css'

function HomePage() {

    return (
        <>
            <HomePageNav />
            <div className="product-container">
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </>
    )
}

export default HomePage