import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../store/store";

export interface IControlSlice {
    currentStepNumber: number,
    totalSteps: number,
}

const initialState: IControlSlice = {
    currentStepNumber: 1,
    totalSteps: 4,
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
        }
    }
});

export const selectCurrentStepNumber = (state: RootState) => state.control.currentStepNumber;
export const selectTotalSteps = (state: RootState) => state.control.totalSteps;

export const {nextStep, prevStep} = controlSlice.actions;
export default controlSlice.reducer
