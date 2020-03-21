import React from "react";
import Button from "../Button";
import PropTypes from "prop-types";

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <>
      {options.map(option => (
        <Button
          key={option}
          title={option}
          onChangeStatistics={() => onLeaveFeedback(option)}
        />
      ))}
    </>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired
};

export default FeedbackOptions;
