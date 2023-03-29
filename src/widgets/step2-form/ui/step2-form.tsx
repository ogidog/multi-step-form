import * as React from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {selectCurrentStepNumber} from "shared/slices/controlSlice";
import {IStep2State, selectBilling} from "shared/slices/step2Slice";
import {RootState} from "shared/store/store";
import {FC, FormEvent, FormEventHandler} from "react";
import {PlanOption} from "entities/index";
import {PLANS, PRICE_MONTHLY, PRICE_YEARLY} from "app/lib/const";

const StyledContainer = styled.div`
  @media (max-width: 1024px) {
    display: grid;
    grid-template-rows: 50px 60px repeat(3, 80px) 1fr;

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
  height: 50px;
`;

export const Step2Form: FC = () => {

    const billing = useSelector(selectBilling);
    let currentStep = useSelector(selectCurrentStepNumber);
    const step2State: IStep2State = useSelector((state: RootState) => state.step2)
    const dispatch = useDispatch()

    const options = () => {
        return PLANS.map((plan, index) => {
            if (billing === "Monthly") {
                return <PlanOption key={index} icon={""} plan={plan} price={PRICE_MONTHLY[index]} billing={billing}/>
            }
            if (billing === "Yearly") {
                return <PlanOption key={index} icon={""} plan={plan} price={PRICE_YEARLY[index]} billing={billing}/>
            }
        });
    }

    const submitHandler: FormEventHandler = (event: FormEvent<HTMLFormElement>) => {

    }

    return (
        <form id={`step${currentStep}`} name={`step${currentStep}`} onSubmit={submitHandler} autoComplete={"off"}>
            <StyledContainer>
                <Title>Select your plan</Title>
                <Hint>You have the option of monthly or yearly billing.</Hint>
                {options()}
            </StyledContainer>
        </form>
    );
};
