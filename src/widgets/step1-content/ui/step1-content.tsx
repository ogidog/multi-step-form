import * as React from 'react';
import {FC, FormEvent, FormEventHandler, memo, useEffect} from "react";
import styled from "styled-components";
import {InputEmail, InputName, InputPhone} from "entities/index";
import {IStep1State, setData as setStep1Data} from "shared/slices/step1Slice";
import {useDispatch, useSelector} from "react-redux";
import {nextStep, selectCurrentStepNumber} from "shared/slices/controlSlice";
import {useNavigate} from "react-router-dom";
import {RootState} from "shared/store/store";

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

export const Step1Content: FC = () => {

    let currentStep = useSelector(selectCurrentStepNumber);
    const step1State: IStep1State = useSelector((state: RootState) => state.step1)
    const dispatch = useDispatch()
    //const navigate = useNavigate();

    useEffect(() => {
        const step1Form = document.forms.namedItem(`step${currentStep}`);
        if (step1Form) {
            (step1Form.elements.namedItem("personnelName") as HTMLInputElement).value = step1State.name;
            (step1Form.elements.namedItem("personnelEmail") as HTMLInputElement).value = step1State.email;
            (step1Form.elements.namedItem("personnelPhone") as HTMLInputElement).value = step1State.phone;
        }
    }, [])

    const submitHandler: FormEventHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const step1Form = document.forms.namedItem(`step${currentStep}`);
        if (step1Form) {
            const step1Data: IStep1State = {
                name: (step1Form.elements.namedItem("personnelName") as HTMLInputElement).value,
                email: (step1Form.elements.namedItem("personnelEmail") as HTMLInputElement).value,
                phone: (step1Form.elements.namedItem("personnelPhone") as HTMLInputElement).value,
            }
            dispatch(setStep1Data(step1Data));
            dispatch(nextStep());
            //navigate(`/step${++currentStep}`)
        }
    }

    return (
        <form id={`step${currentStep}`} name={`step${currentStep}`} onSubmit={submitHandler} autoComplete={"off"}>
            <StyledContainer>
                <Title>Personnel info</Title>
                <Hint>Please provide your name, email address, and phone number.</Hint>
                <InputName/>
                <InputEmail/>
                <InputPhone/>
            </StyledContainer>
        </form>
    );
};
