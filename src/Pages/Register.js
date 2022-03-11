import FormVal from "../Components/FormVal";
import "./Register.css"


function Register() {

    return (
        <div className="container-fluid" style={{ backgroundImage: "url(/Images/reading.jpg)", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '120vh' }}>
            <div className="row justify-content-center p-5">
                <div className="col-md-3 m-5 rounded x" >
                    <FormVal />
                </div>
            </div>
        </div>
    )
}
export default Register