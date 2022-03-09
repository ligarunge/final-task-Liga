import { ErrorMessage, useField } from 'formik';

export const SelectField = ({ label, ...props}) => {
    const [field, meta] = useField(props)
    return (
        <div>
            <label htmlFor={field.name}>{label}</label>
            <select name={field.name} {...props}>
                <option></option>
                <option>Lithuania</option>
                <option>Estonia</option>
                <option>Latvia</option> 
            </select>
            <ErrorMessage component="div" name={field.name} style={{color: 'red', fontSize: '0.8rem'}} />
        </div>

    )

}

