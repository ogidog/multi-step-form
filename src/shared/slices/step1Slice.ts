import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {EmailType, NameType, PhoneType} from "../@types";

export interface IStep1State {
    name: NameType,
    email: EmailType,
    phone: PhoneType,
}

const initialState: IStep1State = {
    name: "",
    email: "",
    phone: "",
}

const step1Slice = createSlice({
    name: "step1",
    initialState: initialState,
    reducers: {
        setData: (state, action: PayloadAction<IStep1State>) => {
            return {...state, ...action.payload}
        }
    }
});

export const {setData} = step1Slice.actions;
export default step1Slice.reducer;



