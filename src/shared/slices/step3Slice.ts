import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store/store";
import {AddOnType, PriceType} from "../@types";

export interface IStep3State {
    addOns: AddOnType[],
    prices: PriceType[]
}

const initState: IStep3State = {
    addOns: [],
    prices: []
};

const step3Slice = createSlice({
    name: "step3",
    initialState: initState,
    reducers: {
        setData: (state, action: PayloadAction<IStep3State>) => {
            state.addOns = action.payload.addOns;
            state.prices = action.payload.prices;
        }
    }
});


export const selectAddOns = (state: RootState) => state.step3.addOns;
export const {setData} = step3Slice.actions;

export default step3Slice.reducer;
