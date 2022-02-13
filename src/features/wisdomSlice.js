import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import wisdomURL from "../comon/api/wisdomAPI";

// API Fucntion goes here -sk
const getQuote = async () => {
    const response = await fetch(wisdomURL);
    const json = await response.json();
    const quote = json.contents.quotes[0];

    return {
        wisdom: quote.quote,
        author: quote.author
    };
};

// API Fucntion Calling here (actually not exactly, Its just a reference to API function -sk
export const fetchAsyncQuotes = createAsyncThunk("quote/getQuote", getQuote);

export const quoteSlice = createSlice({
    name: "wisdom",
    initialState: {
        wisdom: "",
        author: ""
    },
    extraReducers: {
        [fetchAsyncQuotes.fulfilled]: (state, action) => {
            state.wisdom = action.payload.wisdom;
            state.author = action.payload.author;
        }
    }
});

export default quoteSlice.reducer;

// EOF