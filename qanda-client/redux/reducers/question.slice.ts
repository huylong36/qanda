import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    question: []
}
const questionSlice = createSlice({
    name: "question",
    initialState,
    reducers: {
        questionState: (state, action) => {
            console.log('state', state, 'action', action)
            state.question = action.payload;
        }
    },
})
export const { questionState } = questionSlice.actions
export default questionSlice.reducer;