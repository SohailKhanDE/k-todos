import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchAsyncWeather} from "../../features/weatherSlice";

const Weather = () => {
    const {metadata, temperature, city, country} = useSelector(
        (state) => state.weather
    );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAsyncWeather({city, country}));
    }, [dispatch, city, country]);
    return (

        <div className="absolute flex items-start justify-end w-fit inset-y-0 right-4 top-4">
            <div className="backdrop-blur-x1 bg-white/60 rounded-2xl p-5">
                {(metadata.icon) ? (
                    <img src={`http://openweathermap.org/img/wn/${metadata.icon}@2x.png`} alt=""/>) : (<>na</>)}
                <div className="text-3xl">
                    <p className="temperature">{city}</p>
                    <p className="temperature">{temperature}°</p>
                    <p className="text-2xl">{metadata.description}</p>
                </div>
            </div>

        </div>
    );
};

export default Weather;
