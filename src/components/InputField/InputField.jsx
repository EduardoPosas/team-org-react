import './InputField.css';

const InputField = ({
    inputLabel,
    inputId,
    inputPlaceholder,
    inputType,
    required,
    value,
    setValue
}) => {
    return (
        <>
            <label htmlFor={inputId}>{inputLabel}</label>
            <input
                type={inputType}
                id={inputId}
                placeholder={inputPlaceholder}
                required={required}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </>
    )
}

export default InputField;