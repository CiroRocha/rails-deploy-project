import React from "react";
import { StyledErrorMessage } from './error_message.styled'

const ErrorMessage = ({ fieldName, message }) => {
  return (
    <StyledErrorMessage>
      <p className={`error-message ${fieldName}`}>{message}</p>
    </StyledErrorMessage>
  );
};

export default ErrorMessage;
