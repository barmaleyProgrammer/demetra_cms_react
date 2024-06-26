const InputField = ({
        type = 'text',
        label = '',
        name = '',
        value = '',
        placeholder = '',
        required = false,
        onChange,
        onPaste,
        readOnly = false,
        cssClass = '',
        maxLength = '',
        autocomplete = '',
        onFocus = undefined,
        onBlur = undefined,
        pattern = undefined,
        style = undefined,
        min = undefined,
        step = undefined,
    }) => {
    return (
        <fieldset className={cssClass}>
            {label ? <label htmlFor={name} className="text-sm text-black_figma font-light">{label}</label> : ''}
            <input
                className="text-sm text-[#2A3744] outline-none rounded border border-borderColor focus:border-yellow_figma p-3"
                type={type}
                name={name}
                id={name}
                value={value}
                placeholder={placeholder}
                required={required}
                onChange={onChange}
                onPaste={onPaste}
                readOnly={readOnly}
                maxLength={maxLength}
                autoComplete={autocomplete}
                onFocus={onFocus}
                style={style}
                onBlur={onBlur}
                pattern={pattern}
                min={min}
                step={step}
            />
        </fieldset>
    );
};

export default InputField;
