import * as React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {nextStep, selectCurrentStepNumber} from "shared/slices/controlSlice";
import {FC, FormEvent, FormEventHandler} from "react";
import styled from "styled-components";
import {AddOnOption, FormCaption} from "entities/index";
import {ADD_ONS, ADD_ON_DESCRIPTION, ADD_ON_PRICE} from "shared/lib/const";
import {selectAddOns, setData as setStep3Data} from "shared/slices/step3Slice";
import {selectBilling} from "shared/slices/step2Slice";
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

const InputContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-row-gap: 10px;
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
                <FormCaption title={"Pick add-ons"} hint={"Add-ons help enhance your gaming experience."}/>
                <InputContainer>
                    {options()}
                </InputContainer>
            </StyledContainer>
        </form>
    );
};
