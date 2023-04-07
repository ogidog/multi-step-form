import * as React from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {nextStep, selectCurrentStepNumber} from "shared/slices/controlSlice";
import {selectBilling, selectPlan, setData as setStep2Data} from "shared/slices/step2Slice";
import {FC, FormEvent, FormEventHandler} from "react";
import {BillingToggle, FormCaption, PlanOption} from "entities/index";
import {PLANS, PLAN_PRICE} from "shared/lib/const";
import {shortBillingName} from "shared/index";

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

  @media (min-width: 1024px) {
    width: var(--form-width-desktop);
  }
`;

const OptionContainer = styled.div`
  display: grid;

  @media (max-width: 1023px) {
    grid-template-rows: repeat(3, 1fr);
    grid-row-gap: 10px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 15px;
    grid-row-gap: 10px;
  }
`

export const Step2Form: FC = () => {

    const billing = useSelector(selectBilling);
    const plan = useSelector(selectPlan)
    const currentStep = useSelector(selectCurrentStepNumber);
    const dispatch = useDispatch();

    const options = () => {
        return PLANS.map((_plan, index) => {
            const checked = plan === _plan ? true : false;
            const payment = `$${PLAN_PRICE[billing][_plan]}/${shortBillingName(billing)}`;
            return <PlanOption key={index} plan={_plan} payment={payment} billing={billing} checked={checked}/>
        });
    }

    const submitHandler: FormEventHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const stepFormElem = document.forms.namedItem(`step${currentStep}`);
        if (stepFormElem) {
            const plan = (new FormData(stepFormElem)).get("plan")
            if (plan) {
                dispatch(setStep2Data({plan: plan.toString(), planPrice: PLAN_PRICE[billing][plan.toString()]}))
                dispatch(nextStep());
            }
        }
    }

    return (
        <form id={`step${currentStep}`} name={`step${currentStep}`} onSubmit={submitHandler} autoComplete={"off"}>
            <StyledContainer>
                <FormCaption title={"Select your plan"} hint={"You have the option of monthly or yearly billing."}/>
                <OptionContainer>
                    {options()}
                </OptionContainer>
                <BillingToggle/>
            </StyledContainer>
        </form>
    );
};
