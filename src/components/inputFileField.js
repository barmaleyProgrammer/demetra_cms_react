const InputField = ({
        label = '',
        name = '',
        placeholder = '',
        required = false,
        onChange,
        cssClass = '',
        onFocus = undefined,
        onBlur = undefined,
    }) => {
    return (
        <fieldset className={cssClass}>
            {label ? <label htmlFor={name} className="text-sm text-black_figma font-light">{label}</label> : ''}
            <input
                className="text-sm text-[#2A3744] outline-none rounded border border-borderColor focus:border-yellow_figma p-3"
                type="file"
                name={name}
                id={name}
                placeholder={placeholder}
                required={required}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
            />
        </fieldset>
    );
};

export default InputField;
