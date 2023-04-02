import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store/store";

export interface IControlSlice {
    currentStepNumber: number,
}

const initialState: IControlSlice = {
    currentStepNumber: 4,
}

const controlSlice = createSlice({
    name: "control",
    initialState: initialState,
    reducers: {
        nextStep: (state) => {
            state.currentStepNumber += 1;
        },
        prevStep: (state) => {
            state.currentStepNumber -= 1;
        },
        setStep: (state, action: PayloadAction<IControlSlice["currentStepNumber"]>) => {
            state.currentStepNumber = action.payload
        }
    }
});

export const selectCurrentStepNumber = (state: RootState) => state.control.currentStepNumber;

export const {nextStep, prevStep, setStep} = controlSlice.actions;
export default controlSlice.reducer
