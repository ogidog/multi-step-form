import * as React from 'react';
import {FC, useRef} from "react";
import styled from "styled-components";

type Props = {
    id: string,
    name: string,
    placeholderText: string,
    label: string
    errorText: string,

    required?: boolean,
    type: string,
    maxLength?: number,
    pattern?: string,

    onChange?: (value: string) => string
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
  font-size: var(--font-small);
  color: var(--marine-blue);
  font-weight: 700;

  outline: none;

  &::placeholder {
    color: var(--cool-gray);
    font-size: var(--font-small);
    font-weight: 500;
  }

  &:focus {
    border-color: var(--purplish-blue);
  }
`

const Label = styled.label`
  grid-area: label;

  color: var(--marine-blue);
  font-size: var(--font-small);
  font-weight: 500;
`

const ErrorLabel = styled(Label)<{ text: string }>`
  color: var(--strawberry-red);
  grid-area: error;
  text-align: right;

  display: none;
`

export const InputA: FC<Props> = (props) => {
    const inputRef = useRef<HTMLInputElement>(null)
    const {
        id, name, errorText, label, placeholderText, required = true,
        pattern, type, maxLength, onChange
    } = props;

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            inputRef.current!.value = onChange(inputRef.current!.value);
        }
    }
    const patternProp = pattern ? {pattern: pattern} : {};
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
                ref={inputRef}
                onChange={changeHandler.bind(this)}
                {...patternProp}
            />
        </StyledContainer>
    );
}
