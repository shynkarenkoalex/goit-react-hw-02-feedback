import React from 'react';

const Button = ({title, onChangeStatistics}) => (
    <button type="button" onClick={() => onChangeStatistics()}>
        {title}
  </button>
);

export default Button;