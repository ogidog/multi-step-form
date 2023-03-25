import * as React from 'react';
import {FC} from "react";
import {InputA} from "../../../shared";

type Props = {};
export const InputPhone: FC = (props: Props) => {
    const changeHandler = (value: string) => {

        const lastDigit = value.slice(-1);

        if (!value.match(/^[0-9\+]*$/)) {
            return value.slice(0, -1);
        }

        if (!value.startsWith("\+")) {
            return ""
        }

        return value;
    }
    return (
        <InputA
            id={"personnelPhone"}
            name={"personnelPhone"}
            type={"tel"}
            label={"Phone Number"}
            placeholderText={"phone number with country code"}
            errorText={"Invalid phone number."}
            onChange={changeHandler}
            pattern={"\\+\\d+"}
        />
    );
};
