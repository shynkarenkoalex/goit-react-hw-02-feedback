import React from "react";
import PropTypes from "prop-types";

const Button = ({ title, onChangeStatistics }) => (
  <button type="button" onClick={() => onChangeStatistics()}>
    {title}
  </button>
);

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onChangeStatistics: PropTypes.func.isRequired
};

export default Button;
