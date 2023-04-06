import * as React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {nextStep, selectCurrentStepNumber} from "shared/slices/controlSlice";
import {FC, FormEvent, FormEventHandler} from "react";
import styled from "styled-components";
import {AddOnOption} from "entities/index";
import {ADD_ONS, ADD_ON_DESCRIPTION, ADD_ON_PRICE} from "shared/lib/const";
import {selectAddOns, setData as setStep3Data} from "shared/slices/step3Slice";
import {selectBilling} from "shared/slices/step2Slice";
import {shortBillingName} from "shared/index";

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
  @media (min-width: 1024px) {

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

export const Step3Form: FC = () => {
    const currentStep = useSelector(selectCurrentStepNumber);
    const billing = useSelector(selectBilling);
    const addOns = useSelector(selectAddOns);
    const dispatch = useDispatch();

    const options = () => {
        return ADD_ONS.map((_addOn, index) => {
            const checked = addOns.includes(_addOn) ? true : false;
            const payment = `+$${ADD_ON_PRICE[billing][_addOn]}/${shortBillingName(billing)}`;
            const addOnDesc = ADD_ON_DESCRIPTION[index];
            return <AddOnOption key={index} addOn={_addOn} payment={payment} checked={checked} addOnDesc={addOnDesc}/>
        });
    }

    const submitHandler: FormEventHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const stepFormElem = document.forms.namedItem(`step${currentStep}`);
        if (stepFormElem) {
            const formData = new FormData(stepFormElem);
            const addOns = Array.from(formData.values()) as string[];
            const prices = addOns.map(addOn => {
                return ADD_ON_PRICE[billing][addOn];
            });
            dispatch(setStep3Data({addOns: addOns, addOnPrices: prices}))
            dispatch(nextStep())
        }
    }

    return (
        <form id={`step${currentStep}`} name={`step${currentStep}`} onSubmit={submitHandler} autoComplete={"off"}>
            <StyledContainer>
                <Title>Pick add-ons</Title>
                <Hint>Add-ons help enhance your gaming experience.</Hint>
                {options()}
            </StyledContainer>
        </form>
    );
};
