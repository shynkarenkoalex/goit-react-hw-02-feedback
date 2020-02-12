import React from 'react';

const Button = ({title, onChangeStatistics, nameHandle}) => (
    <button type="button" onClick={() => onChangeStatistics(nameHandle)}>
        {title}
  </button>
);

export default Button;