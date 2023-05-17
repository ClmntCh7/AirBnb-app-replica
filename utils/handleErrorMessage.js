const handleErrorMessageUtils = (
  errorMessage,
  setErrorMessage,
  message,
  status
) => {
  if (status === 400) {
    if (message === "This email already has an account.") {
      setErrorMessage(message);
      return errorMessage;
    }
  } else if (status === 401) {
    if (message === "Unauthorized") {
      setErrorMessage("Unknown email address");
      return errorMessage;
    }
  }
};

export default handleErrorMessageUtils;
