
import * as React from 'react';
import {InputA} from "shared/index";

export const InputEmail = () => {
    return (
        <InputA
            id={"personnelEmail"}
            name={"personnelEmail"}
            type={"email"}
            label={"Email Address"}
            placeholderText={"e.g. stephenK@gmail.com"}
            errorText={"Invalid email address."}
            maxLength={320}
        />
    );
};
