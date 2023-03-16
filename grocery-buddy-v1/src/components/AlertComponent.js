import React, { useEffect } from "react";

const Alert = ({ msg, type, removeAlert, list }) => {
  // use useEffect hook, which will be triggered when the component renders
  if (removeAlert) {

  }
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    // clear the funtions
    return () => clearInterval(timeout);
    // run only when the is a change of the state array, will get a new set of time out
  }, [list]);

  // construct a css class from the string in the state
  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
