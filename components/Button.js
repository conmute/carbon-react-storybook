import React from 'react';
import PropTypes from 'prop-types';

/** Button component description imported from comments inside the component file */
const Button = ({ disabled, label, onClick, style }) => (
  <button disabled={disabled} onClick={onClick} style={style}>
    {label}
  </button>
);

Button.defaultProps = {
  disabled: false,
  onClick: () => {},
  style: {},
};

Button.propTypes = {
  /** Boolean indicating whether the button should render as disabled */
  disabled: PropTypes.bool,
  /** button label. */
  label: PropTypes.string.isRequired,
  /** onClick handler */
  onClick: PropTypes.func,
  /** Custom styles */
  style: PropTypes.shape({}),
};

export default Button;