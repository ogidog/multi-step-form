import * as React from 'react';
import {forwardRef} from "react";
import styled from "styled-components";

type Props = {
    id: string,
    name: string,
    placeholderText?: string,
    label: string
    errorText: string,

    required?: boolean,
    type: string,
    maxLength?: number,
    pattern?: string,

    onChange?: (value: string) => string,
    onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void,
}

const StyledContainer = styled.div`
  width: 100%;
  height: fit-content;

  display: grid;
  grid-template: "label error"
                 "input input";
  grid-row-gap: 3px;

  align-self: start;

  &:has(> input:focus:invalid) > label[id="error"] {
    display: block;
  }

`

const Input = styled.input`
  grid-area: input;
  height: 40px;

  border-radius: 5px;
  border: 2px solid var(--light-gray);

  text-indent: 10px;
  font-size: var(--font-normal);
  color: var(--marine-blue);
  font-weight: 700;

  outline: none;

  &::placeholder {
    color: var(--cool-gray);
    font-size: var(--font-normal);
    font-weight: 500;
  }

  &:focus {
    border-color: var(--purplish-blue);
  }
`

const Label = styled.label`
  grid-area: label;

  color: var(--marine-blue);
  font-size: var(--font-normal);
  font-weight: 500;
`

const ErrorLabel = styled(Label)<{ text: string }>`
  color: var(--strawberry-red);
  grid-area: error;
  text-align: right;

  display: none;
`

export const InputA = forwardRef<HTMLInputElement, Props>((props, ref) => {

    const {
        id, name, errorText, label, placeholderText = "", required = true,
        pattern = "*", type, maxLength = 25, onKeyDown,
    } = props;

    const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (onKeyDown) {
            onKeyDown(event)
        }
    }

    return (
        <StyledContainer>
            <Label htmlFor={"personnelName"}>{label}</Label>
            <ErrorLabel id={"error"} text={errorText}>{errorText}</ErrorLabel>
            <Input
                id={id}
                name={name}
                type={type}
                placeholder={placeholderText}
                required={required}
                ref={ref}
                onKeyDown={keyDownHandler.bind(this)}
                maxLength={maxLength}
                pattern={pattern}
            />
        </StyledContainer>
    );
});
