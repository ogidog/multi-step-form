import * as React from 'react';
import styled from "styled-components";
import {useSelector} from "react-redux";
import {selectCurrentStepNumber} from "shared/slices/controlSlice";
import {StepNumberType} from "shared/@types";

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr;
  grid-template-rows: 1fr 1fr;
  grid-column-gap: 15px;

  align-items: center;
`

const Number = styled.div<{ stepNumber: StepNumberType, currentStep: StepNumberType }>`
  box-sizing: border-box;
  border: 2px solid var(--white);
  border-radius: 50%;

  width: 40px;
  height: 40px;
  line-height: 38px;

  text-align: center;
  font-weight: 500;
  color: ${(props) => props.stepNumber === props.currentStep ? `var(--marine-blue)` : `var(--white)`};

  grid-row: 1 / 3;
  grid-column: 1 / 2;

  background-color: ${(props) => props.stepNumber === props.currentStep ? `var(--light-blue)` : `transparent`};

`

const Name = styled.div`
  font-weight: 400;
  color: var(--light-gray);
  text-transform: uppercase;

  grid-row: 1 / 2;
  grid-column: 2 / 3;

  @media (max-width: 1023px) {
    display: none;
  }
`

const Description = styled.div`
  font-weight: 700;
  color: var(--white);
  text-transform: uppercase;

  grid-row: 2 / 3;
  grid-column: 2 / 3;

  @media (max-width: 1023px) {
    display: none;
  }
`

type Props = {
    stepNumber: number;
    stepDescription: string;
};


export const StepNumber = (props: Props) => {

    let currentStep = useSelector(selectCurrentStepNumber);
    const {stepNumber, stepDescription} = props;

    return (
        <StyledContainer>
            <Number currentStep={currentStep} stepNumber={stepNumber}>{stepNumber}</Number>
            <Name>{`step ${stepNumber}`}</Name>
            <Description>{stepDescription}</Description>
        </StyledContainer>
    );
};
