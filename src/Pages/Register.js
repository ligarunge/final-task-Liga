import FormVal from "../Components/FormVal";


function Register() {

    return (
        <div className="container-fluid" style={{ backgroundImage: "url(/Images/reading.jpg)", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '100vh' }}>
            <div className="row justify-content-center">
                <div className="col-md-3 m-5 rounded" style={{backgroundColor: 'whitesmoke'}}>
                    <FormVal />
                </div>
            </div>
        </div>
    )
}
export default Register