import { useField } from 'formik';

export const MyCheckbox = ({ children, ...props }) => {

    const [field, meta] = useField({ ...props, type: 'checkbox' });
    return (
        <div>
            <label className="checkbox-input">
                <input className='mr-2' type="checkbox" {...field} {...props} />
                {children}
            </label>
            {meta.touched && meta.error ? (
                <div className="error text-red-500">{meta.error}</div>
            ) : null}
        </div>
    );
};