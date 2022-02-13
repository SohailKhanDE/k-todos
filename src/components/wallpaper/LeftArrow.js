import React from "react";
import {useDispatch} from "react-redux";
import {switchToPreviousBackgroundImage} from "../../features/wallpaperSlice";
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";

const LeftArrow = () => {
    const dispatch = useDispatch();

    return (
        <div className="absolute flex items-center justify-start w-fit inset-y-0 left-0 p-4">
            <Button onClick={() => {
                dispatch(switchToPreviousBackgroundImage());
            }} color="white" buttonType="outline" size="regular" rounded={true} block={false} iconOnly={true} ripple="light">
                <Icon name="arrow_back_ios" color="white" size="sm"/> </Button>
        </div>
    );
};

export default LeftArrow;
