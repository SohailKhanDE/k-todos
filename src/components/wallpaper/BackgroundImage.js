import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getBackgroundImage} from "../../features/wallpaperSlice";

const BackgroundImage = () => {
    const {imageUrls, currentImageUrlIndex} = useSelector(
        (state) => state.backgroundImage
    );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBackgroundImage());
    }, [dispatch]);

    return (
        <div style={{backgroundImage: `url(${imageUrls[currentImageUrlIndex]})`}} className="flex h-screen bg-cover"></div>
    );
};

export default BackgroundImage;
