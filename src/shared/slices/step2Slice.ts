import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store/store";

export interface IStep2State {
    plan: string,
    price: number,
    billing: "Monthly" | "Yearly",
}

const initialState: IStep2State = {
    plan: "Arcade",
    price: 9,
    billing: "Monthly",
}

const step2Slice = createSlice({
    name: "step2",
    initialState: initialState,
    reducers: {
        changePlan: (state, action: PayloadAction<IStep2State>) => {
            state.plan = action.payload.plan;
            state.price = action.payload.price;
            state.billing = action.payload.billing;
        }
    }
});

export const selectBilling = (state: RootState) => state.step2.billing;

export const {changePlan} = step2Slice.actions;
export default step2Slice.reducer;
