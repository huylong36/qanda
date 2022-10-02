
import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./reducers/category.slice";
export const store = configureStore({
    reducer: {
        categories: categorySlice,
    },
    middleware: (getDefaultMiddle) => getDefaultMiddle({ serializableCheck: false }),
});

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>;