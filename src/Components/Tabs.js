import Creators from "./Creators"
import "./Tabs.css"
import Community from "./Community"
import Contacts from "./Contacts"
import GoogleMap from "./GoogleMap"

function Tabs() {

    return (
        <div className="row pt-4 ps-5 justify-content-center">
            <div className="col-10 pt-5">
                <ul className="nav nav-tabs pt-5 m-3" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link nav-link-white active font-baskerville" id="creators-tab" data-bs-toggle="tab" data-bs-target="#products" type="button" role="tab" aria-controls="home" aria-selected="true">
                            <h5>Creators</h5></button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link nav-link-white fw-bold font-baskerville" id="community-tab" data-bs-toggle="tab" data-bs-target="#address" type="button" role="tab" aria-controls="profile" aria-selected="false">
                            <h5>Community</h5></button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link nav-link-white fw-bold font-baskerville" id="contacts-tab" data-bs-toggle="tab" data-bs-target="#summary" type="button" role="tab" aria-controls="contact" aria-selected="false">
                            <h5>Contacts</h5></button>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade border border-top-0 rounded show active" id="products" role="tabpanel" aria-labelledby="creators"><Creators /></div>
                    <div className="tab-pane fade border border-top-0 rounded" id="address" role="tabpanel" aria-labelledby="community-tab"><Community /></div>
                    <div className="tab-pane fade border border-top-0 rounded" id="summary" role="tabpanel" aria-labelledby="summary-tab"><Contacts /></div>
                </div>
            </div>
        </div>
    )
}
export default Tabs