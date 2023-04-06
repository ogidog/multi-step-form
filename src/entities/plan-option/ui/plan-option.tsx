import * as React from 'react';
import styled from "styled-components";
import {DISCOUNT} from "shared/lib/const";
import {BillingType, PaymentType, PlanType} from "shared/@types";

const Label = styled.label<{ billing: BillingType }>`
  display: grid;

  border: 1px solid var(--light-gray);
  border-radius: 7px;
  
  cursor: pointer;

  @media (max-width: 1023px) {
    grid-template-columns: 40px 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: ${props => props.billing === "Monthly" ? `"icon plan" "icon payment"` : `"icon plan" "icon payment" "null discount"`};;
    grid-column-gap: 20px;

    width: 100%;
    height: fit-content;

    box-sizing: border-box;
    padding: 15px 15px 15px 15px;

  }

  @media (min-width: 1024px) {
    grid-template-rows: 80px 25px 25px 25px;
    grid-template-areas: "icon" "plan" "payment" "discount";
    box-sizing: border-box;
    padding: 15px;
  }

  &:has( + input:checked) {
    border: 1px solid var(--marine-blue);
    background-color: var(--magnolia);
  }

  & div[id="discount"] {
    display: ${props => props.billing === "Monthly" ? "none" : "block"};
  }

  &:hover {
    border-color: var(--marine-blue);
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
  align-self: center;
`

const Payment = styled.div`
  grid-area: payment;
  font-weight: 500;
  color: var(--light-gray);
  align-self: center;
`

const Discount = styled.div`
  grid-area: discount;
  font-weight: 500;
  font-size: var(--font-small);
  color: var(--marine-blue);
  align-self: center;
`;

type Props = {
    plan: PlanType,
    payment: PaymentType,
    billing: BillingType,
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
