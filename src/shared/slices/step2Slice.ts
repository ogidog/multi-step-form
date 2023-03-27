import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface IStep2Slice {
    plan: string,
    price: number,
}

const initialState: IStep2Slice = {
    plan: "1",
    price: 3,
}

const step2Slice = createSlice({
    name: "step2",
    initialState: initialState,
    reducers: {
        testAction: (state, action: PayloadAction<String>) => {
            state.plan = "5";
        }
    }
});

export const {testAction} = step2Slice.actions;
export default step2Slice.reducer;
