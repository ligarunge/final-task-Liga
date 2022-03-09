import { Link } from "react-router-dom"

function Header() {
    return (
        <div className="font-baskerville" style={{ position: 'absolute' }}>
            <nav class="navbar fixed-top">
                <div className="container-fluid">
                        <ul className="nav justify-content-center">
                            <li className="nav-item">
                            <Link className="nav-link" to="/">
                            <img src="/images/logo.png" className="img-fluid" style={{ height: '4rem' }} alt="logo" />
                        </Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/aboutus">About us</Link>
                            </li>
                            <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/categories" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
                        </ul>

                </div>



            </nav>
        </div>
    )
}

export default Header