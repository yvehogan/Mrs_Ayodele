import React from 'react';
import PropTypes from 'prop-types';

function TextInput({
    className, value, name, readOnly,
    onChange, placeholder, error
}) {

    return (
        <div className={`${className} relative`}>
            <input
                className={`$ text-black h-12 px-3 outline-none w-full border-b border-black`}
                name={name}
                id={name}
                value={value}
                onChange={onChange}
                readOnly={readOnly}
                placeholder={placeholder}
            />

        </div>
    );
}

TextInput.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string,
    name: PropTypes.string,
    readOnly: PropTypes.bool,
    placeholder: PropTypes.string,
};

TextInput.defaultProps = {
    className: '',
    type: 'text',
    onChange: () => { },
    value: '',
    name: '',
    readOnly: false,
    disabled: false,
    placeholder: ''
};

export default TextInput;
