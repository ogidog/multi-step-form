import * as React from 'react';
import {IStep2State} from "shared/slices/step2Slice";
import styled from "styled-components";
import {DISCOUNT} from "shared/lib/const";

const Label = styled.label<{ billing?: IStep2State["billing"] }>`
  display: grid;
  grid-template-columns: 40px 1fr;
  grid-template-areas: ${props => props.billing === "Monthly" ? '"icon plan" "icon payment"' : '"icon plan" "icon payment" "empty discount"'};
  grid-row-gap: 5px;
  grid-column-gap: 20px;

  width: 100%;
  height: 80px;

  box-sizing: border-box;
  padding: 0px 15px 0px 15px;

  border: 1px solid var(--light-gray);
  border-radius: 7px;

  cursor: pointer;

  &:has( + input:checked) {
    border: 1px solid var(--marine-blue);
    background-color: var(--magnolia);
  }

  & div[id="discount"] {
    display: ${props => props.billing === "Monthly" ? "none" : "block"};
  }

  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;


const Input = styled.input`
  outline: none;
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

const Payment = styled.div`
  grid-area: payment;
  font-weight: 500;
  color: var(--light-gray);
`

const Discount = styled.div`
  grid-area: discount;
  font-weight: 500;
  font-size: var(--font-small);
  color: var(--marine-blue);

`;

type Props = {
    plan: IStep2State["plan"],
    payment: string,
    billing: IStep2State["billing"],
    checked?: boolean
};

export const PlanOption = (props: Props) => {
    const {plan, payment, billing, checked = false} = props;

    return (
        <>
            <Label htmlFor={`plan${plan}`} billing={billing}>
                <Icon src={require(`../assets/icon-${plan.toLowerCase()}.svg`)}/>
                <Plan>{plan}</Plan>
                <Payment>{payment}</Payment>
                <Discount id={"discount"}>{DISCOUNT}</Discount>
            </Label>
            <Input id={`plan${plan}`} name={`plan`} type={"radio"} value={plan} defaultChecked={checked}/>
        </>

    );
};
