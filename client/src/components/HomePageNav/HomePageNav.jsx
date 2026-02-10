import { NavLink } from 'react-router'
import companyLogo from '../../assets/icons8-armor.svg'
import './HomePageNav.css'

function HomePageNav() {

    return (
        <nav className="navbar glass-navbar">
            <div className="container-fluid gap-2">
                <div className="d-flex align-items-center gap-2">
                    <img src={companyLogo} alt="company logo" width={30} />
                    <NavLink className="navbar-brand" to='/'>Mutiny</NavLink>
                </div>
                <form className="d-flex" role="search">
                    <div className="input-group">
                        <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-secondary" type="submit">
                            <i className="bi bi-search"></i>
                        </button>
                    </div>
                </form>
                <div>
                    <NavLink className="btn btn-outline-secondary btn-glass" to='/orders'>
                        <i className="bi bi-bag-check"></i>
                    </NavLink>
                    <NavLink className="btn btn-outline-secondary btn-glass" to='/checkout'>
                        <i className="bi bi-cart2"></i>
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}

export default HomePageNav