import * as React from 'react';
import {FC, useRef} from "react";
import {InputA} from "shared/index";

export const InputName: FC = () => {
    return (
        <InputA
            id={"personnelName"}
            name={"personnelName"}
            type={"text"}
            label={"Name"}
            placeholderText={"e.g. Stephen King"}
            errorText={"This field is required."}
            required={true}
        />
    );
};
