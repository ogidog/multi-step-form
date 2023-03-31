import * as React from 'react';
import {useSelector} from "react-redux";
import {selectCurrentStepNumber} from "shared/slices/controlSlice";
import {FC, FormEvent, FormEventHandler} from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  @media (max-width: 1024px) {
    display: grid;
    grid-template-rows: 50px 60px 1fr;

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

export const Step3Form:FC = () => {
    let currentStep = useSelector(selectCurrentStepNumber);

    const submitHandler: FormEventHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const stepFormElem = document.forms.namedItem(`step${currentStep}`);
        if (stepFormElem) {

        }
    }

    return (
        <form id={`step${currentStep}`} name={`step${currentStep}`} onSubmit={submitHandler} autoComplete={"off"}>
            <StyledContainer>
                <Title>Pick add-ons</Title>
                <Hint>Add-ons help enhance your gaming experience.</Hint>
            </StyledContainer>
        </form>
    );
};
