import * as React from 'react';
import {IStep2State} from "shared/slices/step2Slice";
import styled from "styled-components";


const Label = styled.label`
  display: grid;
  grid-template-columns: 40px 1fr;
  grid-template-areas: "icon plan"
                       "icon price";
  grid-row-gap: 5px;
  grid-column-gap: 20px;

  width: 100%;
  height: 80px;
  
  box-sizing: border-box;
  padding: 0px 15px 0px 15px;
  
  border: 1px solid var(--light-gray);
  border-radius: 7px;
  
  cursor: pointer;
  
  &:has( + input:checked){
    border: 1px solid var(--marine-blue);
    background-color: var(--magnolia);
  }
`;


const Input = styled.input`
  display: none;
`

const Icon = styled.img`
  grid-area: icon;
  width: fit-content;
  height: fit-content;
  align-self: center;
`

const Plan = styled.div`
  grid-area: plan;
  font-weight: 700;
  color: var(--marine-blue);
  align-self: end;
`

const Price = styled.div`
  grid-area: price;
  font-weight: 500;
  color: var(--light-gray);
`

type Props = IStep2State;


export const PlanOption = (props: Props) => {
    const {plan, price, billing} = props;

    return (
        <>
            <Label htmlFor={`plan${plan}`}>
                <Icon src={require(`../assets/icon-${plan.toLowerCase()}.svg`)}/>
                <Plan>{plan}</Plan>
                <Price>{price}/{billing === "Monthly" ? "mo" : "yr"}</Price>
            </Label>
            <Input id={`plan${plan}`} name={`plan`} type={"radio"} value={plan}/>
        </>

    )
        ;
};
