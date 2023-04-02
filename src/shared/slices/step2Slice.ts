import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store/store";
import {BillingType, PlanType, PriceType} from "../@types";

export interface IStep2State {
    plan: PlanType,
    price: PriceType,
    billing: BillingType,
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
        changeBilling: (state, action: PayloadAction<BillingType>) => {
            state.billing = action.payload;
        },
        setData: (state, action: PayloadAction<Omit<IStep2State, "billing">>) => {
            state.plan = action.payload.plan;
            state.price = action.payload.price;
        }
    }
});

export const selectBilling = (state: RootState) => state.step2.billing;
export const selectPlan = (state: RootState) => state.step2.plan;
export const selectPrice = (state: RootState) => state.step2.price;

export const {setData, changeBilling} = step2Slice.actions;
export default step2Slice.reducer;
