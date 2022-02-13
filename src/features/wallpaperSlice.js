import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import wallpaperURL from "../comon/api/wallpaperAPI";

// API Fucntion goes here -sk
const getImage = async () => {
  const response = await fetch(wallpaperURL);
  const json = await response.json();
  return json.results.map((result) => result.urls.full);
};

// API Fucntion Calling here (actually not exactly, Its just a reference to API function -sk
export const getBackgroundImage = createAsyncThunk(
    "backgroundImage/getImage",
    getImage
);

// I love Slicing
export const wallpaperSlice = createSlice({
  name: "backgroundImage",
  initialState: {
    imageUrls: [],
    currentImageUrlIndex: 0
  },
  reducers: {
    switchToNextBackgroundImage: (state) => {
      state.currentImageUrlIndex =
          (state.currentImageUrlIndex + 1) % state.imageUrls.length;
    },
    switchToPreviousBackgroundImage: (state) => {
      let newIndex = state.currentImageUrlIndex - 1;
      if (newIndex < 0) {
        newIndex = state.imageUrls.length - 1;
      }

      state.currentImageUrlIndex = newIndex;
    }
  },
  extraReducers: {
    [getBackgroundImage.fulfilled]: (state, action) => {
      state.imageUrls = action.payload;
      state.currentImageUrlIndex = 0;
    }
  }
});

export const { switchToNextBackgroundImage, switchToPreviousBackgroundImage } = wallpaperSlice.actions;
export default wallpaperSlice.reducer;

// EOF