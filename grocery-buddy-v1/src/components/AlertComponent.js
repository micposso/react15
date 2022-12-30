import React, { useEffect } from "react";

const Alert = ({ msg, type, removeAlert }) => {
  // use useEffect hook, which will be triggered when the component renders
  if (removeAlert) {
    console.log("works");
  }
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    // cleat the funtions
    return () => clearInterval(timeout);
  }, []);

  // construct a css class from the string in the state
  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
