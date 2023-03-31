import * as React from 'react';
import styled from "styled-components";
import {FC} from "react";
import {Toggle} from "shared/index";
import {useDispatch} from "react-redux";
import {changeBilling} from "shared/slices/step2Slice";

const StyledContainer = styled.div`
  display: grid;
  grid-column-gap: 10px;
  grid-template-columns: 1fr fit-content(10px) 1fr;
  align-items: center;

  width: 100%;
  height: 50px;

  background-color: var(--alabaster);
  border-radius: 7px;

  &:has(input:checked) div[id="monthly"] {
    color: var(--cool-gray);
  }

  &:has(input:checked) div[id="yearly"] {
    color: var(--marine-blue);
  }
`;

const MonthlyOption = styled.div`
  font-weight: 700;
  font-size: var(--font-small);
  color: var(--marine-blue);
  text-align: end;
`;

const YearlyOption = styled.div`
  font-weight: 700;
  font-size: var(--font-small);
  color: var(--cool-gray);
  text-align: start;
`;


export const BillingToggle: FC = () => {
    const dispatch = useDispatch();

    const billingChangeHandler = (checked: boolean) => {
        const billing = checked ? "Yearly" : "Monthly";
        dispatch(changeBilling(billing))
    }

    return (
        <StyledContainer>
            <MonthlyOption id={"monthly"}>Monthly</MonthlyOption>
            <Toggle onChange={billingChangeHandler.bind(this)}/>
            <YearlyOption id={"yearly"}>Yearly</YearlyOption>
        </StyledContainer>
    );
};
