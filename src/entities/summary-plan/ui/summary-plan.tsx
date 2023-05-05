import * as React from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {selectBilling, selectPlan, selectPlanPrice} from "shared/slices/step2Slice";
import {setStep} from "shared/slices/controlSlice";
import {shortBillingName} from "shared";

const StyledContainer = styled.div`
  display: grid;
  grid-template-areas: "plan payment"
                       "change payment"
                       "line line";
  grid-row-gap: 5px;
  padding: 0px 15px 0px 15px;

`;

const Plan = styled.div`
  font-weight: 700;
  font-size: var(--font-small);
  color: var(--marine-blue);
  grid-area: plan;
  align-self: end;
`

const ChangePlan = styled.div`
  font-weight: 500;
  font-size: var(--font-small);
  color: var(--cool-gray);
  text-decoration: underline;
  grid-area: change;
  align-self: start;
  cursor: pointer;
`

const Payment = styled.div`
  font-weight: 700;
  font-size: var(--font-small);
  color: var(--marine-blue);
  grid-area: payment;
  align-self: center;
  justify-self: end;
`;

const Line = styled.hr`
  grid-area: line;
  width: 100%;
  height: 1px;
  background-color: var(--light-gray);
  border: none;
`

export const SummaryPlan = () => {
    const plan = useSelector(selectPlan);
    const dispatch = useDispatch();
    const planPrice = useSelector(selectPlanPrice);
    const billing = useSelector(selectBilling);

    const payment = `$${planPrice}/${shortBillingName(billing)}`
    const changeClickHandler = () => {
        dispatch(setStep(2))
    }

    return (
        <StyledContainer>
            <Plan>{plan} ({billing})</Plan>
            <ChangePlan onClick={changeClickHandler}>Change</ChangePlan>
            <Payment>{payment}</Payment>
            <Line/>
        </StyledContainer>
    );
};
