import { useState } from "react";

function Login() {

    const [keyWord, setKeyWord] = useState('')
    const [email, setEmail] = useState('')
    const [errors, setErrors] = useState({})
    
    let showsError = "form-control"
  
    const submit = (e) => {
        e.preventDefault()
        const errorList = {
            ...errors
        }
        if(!keyWord) {
            errorList.keyWord = 'City must be provided'
            console.log(showsError)
            showsError = "form-control is-invalid"
            console.log(showsError)
        } 
        if (!email) {
            errorList.email = 'Valid email must be provided'
          
        }
        setErrors(errorList)
        console.log(errorList)
        
           
    }
  
    return (
<>
        <form className="row g-3 m-5" onSubmit={submit} noValidate>
           
            <div className="col-md-6">
                <label htmlFor="validationCustom03" className="form-label">City</label>
                <input type="text" 
                 value={keyWord}
                 onChange={(event) => setKeyWord(event.target.value)} className={showsError} id="validationCustom03" />
                <div style={{color:'red'}}>
                    {errors.keyWord}
                </div>
            </div>
            <div className="col-md-6">
                <label htmlFor="validationCustom04" className="form-label">Email</label>
                <input type="email" 
                 value={email}
                 onChange={(event) => setEmail(event.target.value)} className={showsError} id="validationCustom04" />
                <div className="" style={{color:'red'}}>
                    {errors.email}
                </div>
            </div>


            
            <div className="col-12">
                <button className="btn btn-primary" type="submit">Submit form</button>
            </div>
        </form>
       
        </>
    )
}
export default Login