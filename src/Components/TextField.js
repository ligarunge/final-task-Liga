import { ErrorMessage, useField } from 'formik';

export const TextField = ({ label, ...props }) => {

    const [field, meta] = useField(props)
    const showFeedback = meta.touched

    return (
        <div className='mb-2'>
            <label htmlFor={field.name}>{label}</label>
            <input
             className={`form-control ${showFeedback ? (meta.error ? 'is-invalid' : 'is-valid') : ''}`}
            {...field} {...props} 
            autoComplete='off' />
            <ErrorMessage component="div" name={field.name} style={{color: 'red', fontSize: '0.8rem'}}/>
        </div>
    )
}
