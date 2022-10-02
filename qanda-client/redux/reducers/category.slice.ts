import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiGetCategory } from "../../utils/api/categoryApi";
import { AppState } from "../store";

const initialState = {
    categories: [],
    loading: false
}
export const fetchCategories = createAsyncThunk("categories/fetch", async () => {
    const { data } = await apiGetCategory();
    return data;
})

const categorySlice = createSlice({
    name: "categories",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        const actionList = [fetchCategories]
        actionList.map(action => {
            builder.addCase(action.pending, (state) => {
                state.loading = true
            })
        })
        builder.addCase(fetchCategories.fulfilled, (state, action) => {
            state.loading = false;
            state.categories = action.payload;
        })
    },
})
export const categoryState = (state: AppState) => state.categories;

export default categorySlice.reducer;
