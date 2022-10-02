// import { configureStore, EnhancedStore } from '@reduxjs/toolkit'
// import { createWrapper } from 'next-redux-wrapper';
// import categorySlice from './reducers/category.slice';
// const rootReducers = {

import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./reducers/category.slice";


// }
// const makeStore = () => {
//     return store;
// }



// export const store: EnhancedStore<ReturnType<any>, any> = configureStore({
//     reducer: rootReducers,
//     middleware: (getDefaultMiddleware) => {
//         return getDefaultMiddleware({
//             serializableCheck: false,
//         })
//     }
// });

// export type AppState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
// export const wrapper = createWrapper(makeStore, { debug: false });

export const store = configureStore({
    reducer: {
        categories: categorySlice,
    },
    middleware: (getDefaultMiddle) => getDefaultMiddle({ serializableCheck: false }),
});

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>;