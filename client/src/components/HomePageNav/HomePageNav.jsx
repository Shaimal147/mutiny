import companyLogo from '../../assets/icons8-armor.svg'
import './HomePageNav.css'

function HomePageNav() {

    return (
        <nav className="navbar glass-navbar">
            <div className="container-fluid gap-2">
                <div className="d-flex align-items-center gap-2">
                    <img src={companyLogo} alt="company logo" width={30} />
                    <a className="navbar-brand" href='/'>Mutiny</a>
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

export default HomePageNav