import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store/store";

export interface IStep2State {
    plan: string,
    price: number,
    billing: "Monthly" | "Yearly",
}

const initialState: IStep2State = {
    plan: "",
    price: 0,
    billing: "Monthly",
}

const step2Slice = createSlice({
    name: "step2",
    initialState: initialState,
    reducers: {
        changeBilling: (state, action: PayloadAction<IStep2State["billing"]>) => {
            state.billing = action.payload;
        },
        setData: (state, action: PayloadAction<Omit<IStep2State, "billing">>) => {
            state.plan = action.payload.plan;
            state.price = action.payload.price;
        }
    }
});

export const selectBilling = (state: RootState) => state.step2.billing;

export const {setData, changeBilling} = step2Slice.actions;
export default step2Slice.reducer;
