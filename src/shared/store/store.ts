import {configureStore} from "@reduxjs/toolkit";
import stepSlice from "../slices/step1Slice";

export const store = configureStore({
    reducer: {
        "step1": stepSlice
    }
});

export type RootState = ReturnType<typeof store.getState>;
