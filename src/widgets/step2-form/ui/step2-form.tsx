import * as React from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {nextStep, selectCurrentStepNumber} from "shared/slices/controlSlice";
import {IStep2State, selectBilling, setData as setStep2Data} from "shared/slices/step2Slice";
import {RootState} from "shared/store/store";
import {FC, FormEvent, FormEventHandler} from "react";
import {BillingToggle, PlanOption} from "entities/index";
import {PLANS, PRICE} from "shared/lib/const";

const StyledContainer = styled.div`
  @media (max-width: 1024px) {
    display: grid;
    grid-template-rows: 50px 60px repeat(3, 90px) 50px 1fr;

    box-sizing: border-box;
    border-radius: 10px;
    background-color: var(--white);

    position: relative;
    top: -25px;

    width: 100%;
    height: 100%;

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

const ErrorLabel = styled.label`
  color: var(--strawberry-red);
  font-weight: 500;
  display: block;
`

export const Step2Form: FC = () => {

    const billing = useSelector(selectBilling);
    let currentStep = useSelector(selectCurrentStepNumber);
    const dispatch = useDispatch()

    const options = () => {
        return PLANS.map((plan, index) => {
            return <PlanOption key={index} plan={plan} price={PRICE[billing][plan]} billing={billing}/>
        });
    }

    const submitHandler: FormEventHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const stepFormElem = document.forms.namedItem(`step${currentStep}`);
        if (stepFormElem) {
            const plan = (new FormData(stepFormElem)).get("plan")
            if (plan) {
                dispatch(setStep2Data({"plan": plan.toString(), "price": PRICE[billing][plan.toString()]}))
                dispatch(nextStep());
            }
        }
    }

    return (
        <form id={`step${currentStep}`} name={`step${currentStep}`} onSubmit={submitHandler} autoComplete={"off"}>
            <StyledContainer>
                <Title>Select your plan</Title>
                <Hint>You have the option of monthly or yearly billing.</Hint>
                {options()}
                <BillingToggle/>
            </StyledContainer>
        </form>
    );
};
