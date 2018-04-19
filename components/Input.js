import React from 'react';
import PropTypes from 'prop-types';

/** Button component description imported from comments inside the component file */
const Input = ({ disabled, placeholder, label }) => (
    <div class="bx--form-item">
        <label for="text-input-1" class="bx--label">{label}</label>
        <input
            id="text-input-1"
            type="text"
            className="bx--text-input"
            placeholder={placeholder}
            disabled={disabled} />
    </div>
);

Input.defaultProps = {
    disabled: false,
    label: 'Text Input label',
    placeholder: 'Placeholder text',
};

Input.propTypes = {
    disabled: PropTypes.bool,
    label: PropTypes.string,
    placeholder: PropTypes.string,
};

export default Input;