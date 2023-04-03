import * as React from 'react';
import styled from "styled-components";
import {SummaryPlan, AddOnSummaryItem, TotalPayment} from "entities/index";
import {useSelector} from "react-redux";
import {selectBilling, selectPlanPrice} from "shared/slices/step2Slice";
import {selectAddOnPrices, selectAddOns} from "shared/slices/step3Slice";
import {shortBillingName} from "shared/index";
import {BillingType} from "../../../shared/@types";

const StyledContainer = styled.div`
  @media (max-width: 1024px) {
    display: grid;
    grid-template-rows: 50px 60px 180px 20px;

    box-sizing: border-box;
    border-radius: 10px;
    background-color: var(--white);

    position: relative;
    top: -25px;

    width: 100%;

    padding: 30px 15px 30px 15px;
  }
  @media (min-width: 1025px) {

  }
`;

const Title = styled.div`
  font-weight: 700;
  color: var(--marine-blue);
  font-size: var(--font-large);
`;

const Hint = styled.div`
  font-weight: 400;
  color: var(--cool-gray);
  font-size: var(--font-medium);

`;

const SummaryChoice = styled.div`
  display: grid;
  grid-template-rows: 85px 25px 35px 1fr;
  grid-row-gap: 5px;
  align-items: end;

  width: 100%;
  height: fit-content;

  background-color: var(--alabaster);

  border-radius: 10px;
`

export const Step4Form = () => {
    const planPrice = useSelector(selectPlanPrice);
    const billing = useSelector(selectBilling).toLowerCase() as BillingType;
    const addOns = useSelector(selectAddOns);
    const addOnPrices = useSelector(selectAddOnPrices);

    const totalPayment = () => {
        const payment = planPrice + addOnPrices.reduce((a, b) => a + b, 0);
        return `$${payment}/${shortBillingName(billing)}`
    }

    const addOnSummary = () => {
        return addOns.map((addOn, index) => {
            const payment = `+$${addOnPrices[index]}/${shortBillingName(billing)}`;
            return <AddOnSummaryItem key={index} addOn={addOn} payment={payment}/>
        });
    }

    return (
        <StyledContainer>
            <Title>Finishing Up</Title>
            <Hint>Double-check everything looks OK before confirming.</Hint>
            <SummaryChoice>
                <SummaryPlan/>
                {addOnSummary()}
            </SummaryChoice>
            <TotalPayment billing={billing} totalPayment={totalPayment()}/>
        </StyledContainer>
    );
};
