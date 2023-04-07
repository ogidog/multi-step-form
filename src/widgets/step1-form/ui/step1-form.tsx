import * as React from 'react';
import {FC, FormEvent, FormEventHandler, useEffect} from "react";
import styled from "styled-components";
import {FormCaption, InputEmail, InputName, InputPhone} from "entities/index";
import {IStep1State, setData as setStep1Data} from "shared/slices/step1Slice";
import {useDispatch, useSelector} from "react-redux";
import {nextStep, selectCurrentStepNumber} from "shared/slices/controlSlice";
import {RootState} from "shared/store/store";

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


export const Step1Form: FC = () => {

    const currentStep = useSelector(selectCurrentStepNumber);
    const step1State: IStep1State = useSelector((state: RootState) => state.step1)
    const dispatch = useDispatch()

    useEffect(() => {
        const stepForm = document.forms.namedItem(`step${currentStep}`);
        if (stepForm) {
            (stepForm.elements.namedItem("personnelName") as HTMLInputElement).value = step1State.name;
            (stepForm.elements.namedItem("personnelEmail") as HTMLInputElement).value = step1State.email;
            (stepForm.elements.namedItem("personnelPhone") as HTMLInputElement).value = step1State.phone;
        }
    }, [])

    const submitHandler: FormEventHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const stepForm = document.forms.namedItem(`step${currentStep}`);
        if (stepForm) {
            const stepData: IStep1State = {
                name: (stepForm.elements.namedItem("personnelName") as HTMLInputElement).value,
                email: (stepForm.elements.namedItem("personnelEmail") as HTMLInputElement).value,
                phone: (stepForm.elements.namedItem("personnelPhone") as HTMLInputElement).value,
            }
            dispatch(setStep1Data(stepData));
            dispatch(nextStep());
        }
    }

    return (
        <form id={`step${currentStep}`} name={`step${currentStep}`} onSubmit={submitHandler} autoComplete={"off"}>
            <StyledContainer>
                <FormCaption title={"Personnel info"}
                             hint={"Please provide your name, email address and phone number."}/>
                <InputContainer>
                    <InputName/>
                    <InputEmail/>
                    <InputPhone/>
                </InputContainer>
            </StyledContainer>
        </form>
    );
};
