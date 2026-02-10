import { NavLink } from 'react-router'
import styles from './OrdersPageNav.module.css'
import companyLogo from '../../assets/icons8-armor.svg'

function OrdersPageNav() {

    return (
        <nav className={`navbar ${styles["glass-navbar"]}`}>
                    <div className="container-fluid gap-2">
                        <div className="d-flex align-items-center gap-2">
                            <img src={companyLogo} alt="company logo" width={30} />
                            <NavLink className="navbar-brand" to='/'>Mutiny</NavLink>
                        </div>
                        <div></div>
                        <div className="d-flex gap-2">
                            <NavLink className={`btn ${styles["btn-outline-secondary"]} ${styles["btn-glass"]}`} to='/orders'>
                                <i className="bi bi-bag-check"></i>
                            </NavLink>
                            <NavLink className={`btn ${styles["btn-outline-secondary"]} ${styles["btn-glass"]}`} to='/checkout'>
                                <i className="bi bi-cart2"></i>
                            </NavLink>
                        </div>
                    </div>
                </nav>
    )
}

export default OrdersPageNav