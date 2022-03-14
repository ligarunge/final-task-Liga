import SuccessCategories from "../Components/SuccessCategories"

function Success() {

    return (
        <div className="container-fluid" style={{ backgroundImage: "url(/Images/reading.jpg)", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '100vh' }}>
            <div className="row pt-5 justify-content-center">
                <div className="col-md-5 mt-5 rounded my-auto" style={{backgroundColor: 'whitesmoke'}}>
                   <h3 className="font-baskerville text-center m-3">We are happy you've joined our crowd!</h3>
                </div>
            </div>
            <div className="row pt-2 justify-content-center">
                <div className="col-md-4 rounded my-auto" style={{backgroundColor: 'whitesmoke'}}>
                   <h4 className="font-baskerville text-center m-3">Write your first review:</h4>
                </div>
            </div>
            <SuccessCategories />
        </div>
    )
}
export default Success