import { Formik, Form, Field } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
import { ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';


function FormVal() {

    const navigate = useNavigate()

    const uppercaseRegex = /(?=.*[A-Z])/
    const countries = ['Latvia', 'Lithuania', 'Estonia', 'UK', 'Mexico']
    const selectOptions = countries.map((country, key) => (
        <option value={country} key={key}>
            {country}
        </option>
    ))
    const onSubmit = values => {
        console.log('form data', values)
        navigate("/success")
    }
    const validate = Yup.object({

        username: Yup.string()
            .max(15, 'Username should not exceed 15 characters')
            .required('Required'),
        email: Yup.string()
            .email('Please provide a valid email')
            .required('Email is required'),
        password: Yup.string()
            .min(4, 'At least 4 characters')
            .matches(uppercaseRegex, 'At least one capital letter!')
            .required('Password required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords should match')
            .required('Please confirm password'),
        firstName: Yup.string()
            .max(15, 'Last name should not exceed 15 characters'),
        country: Yup.string()
            .required('Please select your country')
            .oneOf(countries),
        terms: Yup.boolean()
            .oneOf([true], 'You must agree on terms')
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
                country: '',
                terms: false,
            }}
            validationSchema={validate}
            onSubmit={onSubmit}
        >
            {formik => (
                <div>
                    <h4 className='mt-3 font-baskerville text-center'>Sign Up</h4>
                    <Form >
                        <TextField placeholder="Username" name="username" type="text" />
                        <TextField placeholder="Email" name="email" type="email" />
                        <TextField placeholder="Password" name="password" type="password" />
                        <TextField placeholder="Confirm password" name="confirmPassword" type="password" />
                        <TextField placeholder="First Name" name="firstName" type="text" />
                        <div className='mt-4'>
                            <Field name="country" as="select" className="form-select">
                                <option value={""}>Select a country</option>
                                {selectOptions}
                            </Field>
                        </div>
                        <ErrorMessage component="div" name="country" style={{ color: 'red', fontSize: '0.8rem' }} />
                        <div className='m-2 text-end'>
                            <TextField label="I agree with terms" name="terms" type="checkbox" className="form-check-input m-2" />
                        </div>
                        <div className='text-center mb-2'>
                            <button className="btn btn-primary mt-2 mb-3 text-center" onSubmit={onSubmit} type="submit" disabled={!formik.isValid}>Sign Up</button>
                        </div>
                    </Form>
                </div>
            )}
        </Formik>
    )
}

export default FormVal