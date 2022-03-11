import { Link } from "react-router-dom"

function Footer() {

    return (
        <div className="Container-fluid">
            <div className="row justify-content-end" style={{ backgroundColor: 'darkgrey'}}>
                <div className="col-md-3 p-5" style={{minHeight: '10rem'}}>
                    <button className="btm btn-outline-dark rounded">
                        <Link to="/register">I want to join</Link></button>
                </div>
            </div>
            <div className="row" style={{ backgroundColor: 'darkblue', minHeight: '70'}}>

            </div>

        </div>
    )
}

export default Footer