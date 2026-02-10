import HomePageNav from '../../components/HomePageNav/HomePageNav'
import ProductCard from '../../components/ProductCard/ProductCard'
import styles from './HomePage.module.css'

function HomePage() {

    return (
        <>
            <title>Mutiny - Home</title>
            <HomePageNav />
            <div className={`${styles["product-container"]}`}>
                <ProductCard />
            </div>
        </>
    )
}

export default HomePage