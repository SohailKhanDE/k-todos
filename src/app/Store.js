import { configureStore } from "@reduxjs/toolkit";
import backgroundImageReducer from "../features/wallpaperSlice";
import todoReducer from "../features/todoSlice";
import wisdomReducer from "../features/wisdomSlice";
import weatherReducer from "../features/weatherSlice";
import errorReducer from "../features/errorSlice";

export default configureStore({
    reducer: {
        backgroundImage: backgroundImageReducer,
        weather: weatherReducer,
        wisdom: wisdomReducer,
        todo: todoReducer,
        error: errorReducer
    }
});
