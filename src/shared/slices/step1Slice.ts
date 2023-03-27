import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface IStep1State {
    name: string,
    email: string,
    phone: string,
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



