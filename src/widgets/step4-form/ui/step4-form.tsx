import * as React from 'react';
import styled from "styled-components";
import {SummaryPlan, AddOnSummaryItem, TotalPayment, FormCaption} from "entities/index";
import {useSelector} from "react-redux";
import {selectBilling, selectPlanPrice} from "shared/slices/step2Slice";
import {selectAddOnPrices, selectAddOns} from "shared/slices/step3Slice";
import {shortBillingName} from "shared/index";
import {BillingType} from "shared/@types";

const StyledContainer = styled.div`
  
  display: grid;
  grid-template-rows: repeat(2, fit-content(5px));
  grid-row-gap: 25px;
  align-items: center;

  box-sizing: border-box;
  border-radius: 10px;
  background-color: var(--white);

  @media (max-width: 1023px) {
    position: relative;
    top: -25px;
    padding: 30px 15px 30px 15px;
  }

  @media(min-width: 1024px){
    width: var(--form-width-desktop);
  }
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
            <FormCaption title={"Finishing Up"} hint={"Double-check everything looks OK before confirming."}/>
            <SummaryChoice>
                <SummaryPlan/>
                {addOnSummary()}
            </SummaryChoice>
            <TotalPayment billing={billing} totalPayment={totalPayment()}/>
        </StyledContainer>
    );
};
