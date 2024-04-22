import React from "react";
import Alert from "@component-cloud/alert";

const Button = ({...props}) => {
    return (<>
    <button {...props}>Hi</button>
    <Alert />
    </>);
}

export default Button;