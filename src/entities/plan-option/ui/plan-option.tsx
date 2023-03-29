import * as React from 'react';
import {IStep2State} from "shared/slices/step2Slice";
import styled from "styled-components";

const Label = styled.label`
  display: grid;
  //grid-template-areas: "icon plan"
  //                     "icon price";

  width: 100%;
  height: 80px;
`;

const Input = styled.input`
  display: none;
`

interface Props extends IStep2State {
    icon: string,
}

export const PlanOption = (props: Props) => {
    const {plan, price, billing} = props;
    return (
        <>
            <Label htmlFor={`plan${plan}`}>
                <div>Icon</div>
                <div>{plan}</div>
                <div>{price}/{billing === "Monthly" ? "mo" : "yr"}</div>
            </Label>
            <Input id={`plan${plan}`} name={`plan${plan}`} type={"radio"} value={plan}/>
        </>
    );
};
