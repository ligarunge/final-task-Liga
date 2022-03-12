import { Link } from "react-router-dom"

function Header() {
    return (
        <div className="font-baskerville" style={{ position: 'absolute' }}>
            <nav className="navbar fixed-top">
                <div className="container-fluid">
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/">
                                <img src="/images/bookSea.jpg" className="img-fluid rounded" style={{ height: '5rem' }} alt="logo" />
                            </Link>
                        </li>
                        <li className="nav-item mt-3">
                            <Link className="nav-link text-white" style={{fontSize:'1.2rem'}} to="/">Home</Link>
                        </li>
                        <li className="nav-item dropdown mt-3">
                            <Link className="nav-link dropdown-toggle text-white" style={{fontSize:'1.3rem'}} to="/categories" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Categories
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><Link className="dropdown-item" to="/categories">All categories</Link></li>
                                <li><Link className="dropdown-item" to="/categories/0">Classics</Link></li>
                                <li><Link className="dropdown-item" to="/categories/1">Crime and mystery</Link></li>
                                <li><Link className="dropdown-item" to="/categories/2">Children's</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item mt-3">
                            <Link className="nav-link text-white" style={{fontSize:'1.2rem'}} to="/register">Register</Link>
                        </li>
                        <li className="nav-item mt-3">
                            <Link className="nav-link text-white" style={{fontSize:'1.2rem'}} to="/chat">Chat</Link>
                        </li>
                        <li className="nav-item mt-3">
                            <Link className="nav-link text-white" style={{fontSize:'1.2rem'}} to="/aboutus">About us</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header