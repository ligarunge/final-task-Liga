import { Formik, Form, Field } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
import { ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import { SelectField } from './SelectField';



function FormVal() {

    const uppercaseRegex = /(?=.*[A-Z])/
    const countries = ['Latvia', 'Lithuania', 'Estonia', 'UK', 'Mexico']
    const selectOptions = countries.map((country, key) => (
        <option value={country} key={key}>
            {country}
        </option>
    ))
    const validate = Yup.object({

        username: Yup.string()
            .max(15, 'Name should not exceed 15 characters')
            .required('Required'),
        email: Yup.string()
            .email('Please provide a valid email')
            .required('Email is required'),
        password: Yup.string()
            .min(4, 'At least 4 characters')
            .matches(uppercaseRegex, 'Capital letter!')
            .required('Password required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords should match')
            .required('Please confirm password'),
        firstName: Yup.string()
            .max(15, 'Name should not exceed 15 characters')
            .required('Required'),
        lastName: Yup.string()
            .max(15, 'Name should not exceed 15 characters'),
        country: Yup.string()
            .required('Please select your country')
            .oneOf(countries),
    }

    )

    return (
        <Formik
            initialValues={{
                username: '',
                email: '',
                password: '',
                confirmPassword: '',
                firstName: '',
                lastName: '',
                country: '',
            }}

            validationSchema={validate}



        >
            {formik => (
                <div>
                    <h4>Sign Up</h4>
                    <Form >
                        <TextField label="Username" name="username" type="text" />
                        <TextField label="Email" name="email" type="email" />
                        <TextField label="Password" name="password" type="password" />
                        <TextField label="Confirm Password" name="confirmPassword" type="password" />
                        <TextField label="First Name" name="firstName" type="text" />
                        <TextField label="Last Name" name="lastName" type="text" /> 
                         <Field name="country" as="select" className="form-select">
                            <option value={""}>Select a product</option>
                            {selectOptions}
                        </Field>
                        <ErrorMessage component="div" name="country" style={{ color: 'red', fontSize: '0.8rem' }} />
                        <Link to="/">
                        <button className="btn btn-primary mt-2" type="submit" disabled={!(formik.isValid && formik.dirty)}>Register</button>
                        </Link>
                        

                    </Form>
                </div>
            )}
        </Formik>
    )
}

export default FormVal