import React from 'react';
import Button from "../Button";

function FeedbackOptions({options, onLeaveFeedback}) {
    return (
        <>
            {options.map(key => (
                <Button key={key} title={key} onChangeStatistics={() => onLeaveFeedback(key)} />
            ))}
        </>

    )
}

export default FeedbackOptions;