import { useField } from 'formik';

// TODO : rajouter a la fin le checkmark &#10003;

export const MyTextInput = ({ label, ...props }) => {

    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className="border ps-5 p-2 focus:outline-none focus:ring focus:ring-accent-1" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error text-red-500">{meta.error}</div>
            ) : null}
        </>
    );
};