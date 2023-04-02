import * as React from 'react';
import {useRef} from "react";
import {InputA} from "shared/index";
import {PHONE_CODES} from "shared/lib/const";

export const InputPhone = () => {

    const inputRef = useRef<HTMLInputElement>(null)

    const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {

        let value = inputRef.current!.value;
        let lastSpaceIndex = value.lastIndexOf(" ");

        if (event.key !== "Backspace") {

            if (!event.key.match(/^[0-9\+]*$/)) {
                event.preventDefault()
            }

            if (PHONE_CODES[value]) {
                inputRef.current!.value += " ";
                return;
            }

            if (lastSpaceIndex !== -1) {
                if (value.slice(lastSpaceIndex + 1, value.length).length === 3) {
                    inputRef.current!.value += " ";
                    return;
                }
            }
        }
    }

    const pattern = `\\+\\d+\\s[\\d+\\s]{1,}`

    return (
        <InputA
            id={"personnelPhone"}
            name={"personnelPhone"}
            type={"tel"}
            label={"Phone Number"}
            placeholderText={"phone number with country code"}
            errorText={"Invalid phone number."}
            onKeyDown={keyDownHandler}
            pattern={pattern}
            ref={inputRef}
            maxLength={20}
        />
    );
};
