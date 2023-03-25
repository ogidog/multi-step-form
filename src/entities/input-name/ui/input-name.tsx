import * as React from 'react';
import {FC} from "react";
import {InputA} from "shared/index";

export const InputName: FC = () => {
    return (
        <InputA
            id={"personnelName"}
            name={"personnelName"}
            type={"text"}
            label={"Name"}
            placeholderText={""}
            errorText={"This field is required."}
            required={true}
        />
    );
};
