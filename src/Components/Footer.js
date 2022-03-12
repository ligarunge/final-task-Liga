import { Link } from "react-router-dom"
import "./Footer.css"

function Footer() {

    return (
        <div className="Container-fluid">
            <div className="row justify-content-end" style={{ backgroundColor: 'darkgrey'}}>
                <div className="col-md-3 p-5" style={{minHeight: '10rem'}}>
                    <button className="btn btn-outline-light rounded">
                        <Link to="/register" className="link-white">Join us</Link></button>
                </div>
            </div>
            <div className="row" style={{ backgroundColor: 'navy', minHeight: '70'}}>
                <div className="col-md-3">
                <Link className="nav-link text-white" to="/">
                                <img src="/images/bookSea.jpg" className="img-fluid rounded" style={{ height: '5rem' }} alt="logo" />
                            </Link>
                </div>

            </div>

        </div>
    )
}

export default Footer