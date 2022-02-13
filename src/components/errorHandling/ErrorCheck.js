import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {clearErrorMessage} from "../../features/errorSlice";

import Alert from "@material-tailwind/react/Alert";
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";

const ErrorCheck = () => {
    const {errorMessage, retryHandler} = useSelector((state) => state.error);
    const dispatch = useDispatch();

    if (!errorMessage) {
        return null;
    }

    return (
        <>
            <Alert color="deepOrange">{errorMessage}
                <div className="absolute inset-2 flex items-center justify-end">
                    <Button onClick={() => {
                        dispatch(retryHandler());
                        dispatch(clearErrorMessage());
                    }} color="white" buttonType="" size="regular" rounded={true} block={false} iconOnly={true} ripple="light">
                        <Icon name="close" color="white" size="md"/> </Button>
                </div>
            </Alert>
        </>
    );
};

export default ErrorCheck;
