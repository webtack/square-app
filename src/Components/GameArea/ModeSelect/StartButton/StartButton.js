import React from "react";
import Button from "@mui/material/Button";
import "./StartButton.css";
import PropTypes from "prop-types";

const StartButton = ({ onClickStart, disabled }) => {
  return (
    <Button
      className="button"
      variant="contained"
      onClick={onClickStart}
      disabled={disabled}
    >
      Start
    </Button>
  );
};

StartButton.propTypes = {
  onClickStart: PropTypes.func,
  disabled: PropTypes.bool,
};

export default StartButton;
