import { configureStore, EnhancedStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper';
import categorySlice from '../components/Category/category.slice';
const rootReducers = {
    categories: categorySlice,
}
const makeStore = () => {
    return store;
}



export const store: EnhancedStore<ReturnType<any>, any> = configureStore({
    reducer: rootReducers,
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck: false,
            immutableCheck: false
        })
    }
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const wrapper = createWrapper(makeStore, { debug: false });

