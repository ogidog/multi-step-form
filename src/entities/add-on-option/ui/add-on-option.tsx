import * as React from 'react';
import {IStep3State} from "shared/slices/step3Slice";
import styled from "styled-components";

import iconCheckMark from "../assets/icon-checkmark.svg";

const Label = styled.label`
  display: grid;
  grid-template-columns: 20px 1fr;
  grid-template-areas: "checkbox addOnName payment"
                       "checkbox addOnDesc payment";
  grid-column-gap: 20px;
  grid-row-gap: 5px;

  width: 100%;
  height: 60px;

  box-sizing: border-box;
  padding: 0px 15px 0px 15px;

  border: 1px solid var(--light-gray);
  border-radius: 7px;

  cursor: pointer;

  &:has( + input:checked) {
    border: 1px solid var(--marine-blue);
    background-color: var(--magnolia);
  }

  &:has( + input:checked) div[id="checkbox"] {
    background-color: var(--purplish-blue);
    background-image: ${`url(${iconCheckMark})`};
    background-repeat: no-repeat;
    background-position: center;
  }
`;

const Input = styled.input`
  display: none;
`

const Checkbox = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 5px;
  border: 1px solid var(--purplish-blue);
  grid-area: checkbox;

  align-self: center;
`;

const AddOn = styled.div`
  font-size: var(--font-normal);
  font-weight: 700;
  color: var(--marine-blue);
  grid-area: addOnName;

  align-self: end;
`

const AddOnDesc = styled.div`
  font-size: var(--font-small);
  font-weight: 400;
  color: var(--marine-blue);
  grid-area: addOnDesc;
  align-self: start;
`

const Payment = styled.div`
  font-size: var(--font-small);
  font-weight: 500;
  color: var(--marine-blue);
  grid-area: payment;
  align-self: center;
`;

type Props = { addOnDesc: string, payment: string, addOn: string, checked?: boolean };

export const AddOnOption = (props: Props) => {
    const {addOn, addOnDesc, payment, checked = false} = props;

    return (
        <>
            <Label htmlFor={`addOn${addOn}`}>
                <Checkbox id={"checkbox"}/>
                <AddOn>{addOn}</AddOn>
                <AddOnDesc>{addOnDesc}</AddOnDesc>
                <Payment>{payment}</Payment>
            </Label>
            <Input type={"checkbox"} id={`addOn${addOn}`} name={`addOn${addOn}`} value={addOn}
                   defaultChecked={checked}/>

        </>
    );
};
