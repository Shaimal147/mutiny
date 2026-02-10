import companyLogo from '../assets/icons8-armor.svg'
import './Nav.css'

function Nav() {

    return (
        <nav className="navbar glass-navbar">
            <div className="container-fluid gap-2">
                <div className="d-flex align-items-center gap-2">
                    <img src={companyLogo} alt="company logo" width={30} />
                    <a className="navbar-brand">Mutiny</a>
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
                    <button className="btn btn-outline-secondary btn-glass">
                        <i class="bi bi-bag-check"></i>
                    </button>
                    <button className="btn btn-outline-secondary btn-glass">
                        <i class="bi bi-cart2"></i>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Nav