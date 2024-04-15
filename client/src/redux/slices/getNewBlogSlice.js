import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    newBlog: null,
    };

const getNewBlogSlice = createSlice({
    name: "getNewBlog",
    initialState,
    reducers: {
        setNewBlog: (state, action) => {
            state.newBlog = action.payload;
        },
    },
});

export const { setNewBlog } = getNewBlogSlice.actions;

export default getNewBlogSlice.reducer;