import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import wallpaperURL from "../comon/frontendAPI/weatherAPI";

// API Fucntion goes here -sk
const getWeather = async (city, state) => {
    const response = await fetch(`${wallpaperURL}&q=${city},${state}`);
    const json = await response.json();

    return {
        weatherMetadata: json.weather[0],
        temperature: json.main.temp
    };
};

// API Fucntion Calling here (actually not exactly, Its just a reference to API function -sk
export const fetchAsyncWeather = createAsyncThunk(
    "weather/getWeather",
    ({ city, state }) => getWeather(city, state)
);

// Yes we can slice a weather here ;) will extend this function later
export const weatherSlice = createSlice({
    name: "weather",
    initialState: {
        city: "Berlin",
        country: "DE",
        metadata: {},
        temperature: ""
    },
    reducers: {
        setCity: (state, action) => {
            state.city = action.payload;
        },
        setCountry: (state, action) => {
            state.country = action.payload;
        }
    },
    extraReducers: {
        [fetchAsyncWeather.fulfilled]: (state, action) => {
            state.metadata = action.payload.weatherMetadata;
            state.temperature = action.payload.temperature;
        }
    }
});

export const { setCity, setCountry } = weatherSlice.actions;
export default weatherSlice.reducer;
// EOF