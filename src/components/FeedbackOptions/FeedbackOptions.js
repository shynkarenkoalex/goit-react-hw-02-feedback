import React from 'react';
import Button from "../Button";
import PropTypes from 'prop-types';

function FeedbackOptions({options, onLeaveFeedback}) {
    return (
        <>
            {options.map(key => (
                <Button key={key} title={key} onChangeStatistics={() => onLeaveFeedback(key)} />
            ))}
        </>

    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.string.isRequired
    ),
    onLeaveFeedback: PropTypes.func.isRequired
};

export default FeedbackOptions;