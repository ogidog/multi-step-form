import * as React from 'react';
import {FC, FormEvent, FormEventHandler} from "react";
import styled from "styled-components";
import {InputEmail, InputName, InputPhone} from "entities/index";
import {IStep1State, setData, setData as setStep1Data} from "shared/slices/step1Slice";
import {useDispatch} from "react-redux";

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

    const currentStep = 1;
    const dispatch = useDispatch()

    const submitHandler: FormEventHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const step1Form = document.forms.namedItem(`step${currentStep}`);
        if (step1Form) {
            const step1Data: IStep1State = {
                name: (step1Form.elements.namedItem("personnelName") as HTMLInputElement).value,
                email: (step1Form.elements.namedItem("personnelEmail") as HTMLInputElement).value,
                phone: (step1Form.elements.namedItem("personnelPhone") as HTMLInputElement).value,
            }
            console.log(step1Data)
            dispatch(setStep1Data(step1Data));
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
