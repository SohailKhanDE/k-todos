import {createSlice} from "@reduxjs/toolkit";
import {getBackgroundImage} from "./wallpaperSlice";
import {fetchAsyncQuotes} from "./wisdomSlice";
import {fetchAsyncWeather} from "./weatherSlice";

export const errorSlice = createSlice({
    name: "errors",
    initialState: {
        errorMessage: "",
        retryHandler: null
    },
    reducers: {
        clearErrorMessage: (state) => {
            state.errorMessage = "";
            state.retryHandler = null;
        }
    },
    extraReducers: {
        [getBackgroundImage.rejected]: (state) => {
            state.errorMessage = "Getting image failed.";
            state.retryHandler = getBackgroundImage;
        },
        [fetchAsyncQuotes.rejected]: (state) => {
            state.errorMessage = "Getting the quote failed.";
            state.retryHandler = fetchAsyncQuotes;
        },
        [fetchAsyncWeather.rejected]: (state) => {
            state.errorMessage = "Getting the weather failed.";
            state.retryHandler = fetchAsyncWeather;
        }
    }
});

export const {clearErrorMessage} = errorSlice.actions;
export default errorSlice.reducer;

// EOF