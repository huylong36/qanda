import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper';
import categorySlice from '../components/Category/category.slice';
const rootReducers = {
    categories: categorySlice,
}
const store = configureStore({
    reducer: rootReducers,
})
const makeStore = () => {
    return store;
}
export const wrapper = createWrapper(makeStore, { debug: false })

