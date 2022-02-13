import React from "react";
import {useDispatch} from "react-redux";
import {switchToNextBackgroundImage} from "../../features/wallpaperSlice";
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";

const RightArrow = () => {
    const dispatch = useDispatch();

    return (


        <div className="absolute flex items-center justify-end w-fit inset-y-0 right-0 p-4">
            <Button onClick={() => {
                dispatch(switchToNextBackgroundImage());
            }} color="white" buttonType="outline" size="regular" rounded={true} block={false} iconOnly={true} ripple="light">
                <Icon name="arrow_forward_ios" color="white" size="sm"/> </Button>
        </div>
    );
};

export default RightArrow;
