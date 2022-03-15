import GoogleMap from "./GoogleMap"

function Contacts() {

    return (
        <div style={{ backgroundColor: 'whitesmoke' }}>
            <div className="row font-baskerville p-4">
                <h3 className="ms-3">Our location if you ever in a mood to meet up:</h3>
            </div>
            <div className="row ps-5">
                <div className="col-md-6 p-3">
                    <GoogleMap />
                </div>
                <div className="col-md-6">
                    <div className="row ps-3 pe-5 font-baskerville">
                        <h3>Head office</h3>
                        <h6>Park of Ebelmuiza</h6>
                        <h6>Riga</h6>
                        <h6>LV1058</h6>
                        <h6>Latvia</h6>
                        <h6>Phone: +3712371371</h6>
                        <h6>Email: booksee@booksea.com</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts