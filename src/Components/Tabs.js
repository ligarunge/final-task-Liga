function Tabs() {

    return (
<div className="container mt-5 pt-5">

<ul className="nav nav-tabs" id="myTab" role="tablist">
    <li className="nav-item" role="presentation">
        <button className="nav-link active" id="products-tab" data-bs-toggle="tab" data-bs-target="#products" type="button" role="tab" aria-controls="home" aria-selected="true"><h6>Products</h6></button>
    </li>
    <li className="nav-item" role="presentation">
        <button className="nav-link fw-bold" id="address-tab" data-bs-toggle="tab" data-bs-target="#address" type="button" role="tab" aria-controls="profile" aria-selected="false"><h6>Address</h6></button>
    </li>
    <li className="nav-item" role="presentation">
        <button className="nav-link fw-bold" id="summary-tab" data-bs-toggle="tab" data-bs-target="#summary" type="button" role="tab" aria-controls="contact" aria-selected="false"><h6>Summary</h6></button>
    </li>
</ul>
<div className="tab-content" id="myTabContent">
    <div className="tab-pane fade border border-top-0 show active " id="products" role="tabpanel" aria-labelledby="products-tab">Products</div>
    <div className="tab-pane fade border border-top-0" id="address" role="tabpanel" aria-labelledby="address-tab">Address</div>
    <div className="tab-pane fade border border-top-0" id="summary" role="tabpanel" aria-labelledby="summary-tab">Order</div>
</div>

<div className="row mt-3 mb-3 mx-1">
    <div className="col text-end">
        <h4>Total: 179.97 EUR</h4>
    </div>
</div>
</div>
    )
}
export default Tabs