import './OrdersPageNav.css'
import companyLogo from '../../assets/icons8-armor.svg'

function OrdersPageNav() {

    return (
        <nav className="navbar glass-navbar">
                    <div className="container-fluid gap-2">
                        <div className="d-flex align-items-center gap-2">
                            <img src={companyLogo} alt="company logo" width={30} />
                            <a className="navbar-brand" href='/'>Mutiny</a>
                        </div>
                        <div></div>
                        <div>
                            <a className="btn btn-outline-secondary btn-glass" href='/orders'>
                                <i className="bi bi-bag-check"></i>
                            </a>
                            <a className="btn btn-outline-secondary btn-glass" href='/checkout'>
                                <i className="bi bi-cart2"></i>
                            </a>
                        </div>
                    </div>
                </nav>
    )
}

export default OrdersPageNav