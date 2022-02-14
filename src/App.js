import React from "react";

import BackgroundImage from "./components/wallpaper/BackgroundImage";

import Weather from "./components/weather/Weather";
import Wisdom from "./components/wisdom/Wisdom";
import Error from "./components/errorHandling/ErrorCheck";
import Todos from "./components/todos/Todos";

import LeftArrow from "./components/wallpaper/LeftArrow";
import RightArrow from "./components/wallpaper/RightArrow";

import "@material-tailwind/react/tailwind.css";

function App() {
    return (
        <div className="App">
            <Error />
            <Weather />
            <BackgroundImage />
            <Todos />
            <LeftArrow />
            <RightArrow />
            <Wisdom />
        </div>
    );
}

export default App;