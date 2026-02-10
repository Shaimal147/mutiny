import { NavLink } from 'react-router'
import './CheckoutPageHeader.css'
import companyLogo from '../../assets/icons8-armor.svg'

function checkoutPageHeader() {

    return (
        <nav className="navbar glass-navbar">
                    <div className="container-fluid gap-2">
                        <div className="d-flex align-items-center gap-2">
                            <img src={companyLogo} alt="company logo" width={30} />
                            <NavLink className="navbar-brand" to="/">Mutiny</NavLink>
                        </div>
                        <div>
                            Checkout (0 items)
                        </div>
                        <div>
                            
                        </div>
                    </div>
                </nav>
    )
}

export default checkoutPageHeader