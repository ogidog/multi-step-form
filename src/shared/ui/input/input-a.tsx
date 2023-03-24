import * as React from 'react';
import {FC} from "react";
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
  // display: ${props => props.text || false};
`

export const InputA: FC<Props> = (props) => {
    const {id, name, errorText, label, placeholderText, required = true, type, maxLength} = props;

    return (
        <StyledContainer>
            <Label htmlFor={"personnelName"}>{label}</Label>
            <ErrorLabel id={"error"} text={errorText}>{errorText}</ErrorLabel>
            <Input id={id} name={name} type={type} placeholder={placeholderText} required={true}/>
        </StyledContainer>
    );
}
