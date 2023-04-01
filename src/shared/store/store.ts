import {configureStore} from "@reduxjs/toolkit";
import step1Slice from "shared/slices/step1Slice";
import step2Slice from "shared/slices/step2Slice";
import step3Slice from "shared/slices/step3Slice";
import controlSlice from "shared/slices/controlSlice";

export const store = configureStore({
    reducer: {
        "step1": step1Slice,
        "step2": step2Slice,
        "step3": step3Slice,
        "control": controlSlice,
    }
});

export type RootState = ReturnType<typeof store.getState>;
