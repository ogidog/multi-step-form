import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store/store";
import {AddOnType, PriceType} from "../@types";

export interface IStep3State {
    addOns: AddOnType[],
    addOnPrices: PriceType[]
}

const initState: IStep3State = {
    addOns: [],
    addOnPrices: []
};

const step3Slice = createSlice({
    name: "step3",
    initialState: initState,
    reducers: {
        setData: (state, action: PayloadAction<IStep3State>) => {
            state.addOns = action.payload.addOns;
            state.addOnPrices = action.payload.addOnPrices;
        }
    }
});


export const selectAddOns = (state: RootState) => state.step3.addOns;
export const selectAddOnPrices = (state: RootState) => state.step3.addOnPrices;

export const {setData} = step3Slice.actions;

export default step3Slice.reducer;
