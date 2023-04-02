import * as React from 'react';
import styled from "styled-components";
import {prevStep, selectCurrentStepNumber} from "shared/slices/controlSlice";
import {useDispatch, useSelector} from "react-redux";
import {StepNumberType} from "shared/@types";

const Button = styled.button<{ currentStepNumber: StepNumberType }>`
  box-sizing: border-box;

  width: 110px;
  height: 40px;

  border-width: 0px;

  background-color: transparent;

  color: var(--cool-gray);
  font-size: var(--font-normal);
  font-weight: 700;
  display: ${props => props.currentStepNumber === 1 || props.currentStepNumber > 4 ? 'none' : 'block'};

  grid-area: left;
  justify-self: start;
`

export const PrevStepButton = () => {
    const currentStepNumber = useSelector(selectCurrentStepNumber);
    const dispatch = useDispatch();

    const clickHandler = () => {
        dispatch(prevStep());
    }

    return (
        <Button currentStepNumber={currentStepNumber} onClick={clickHandler}>Go Back</Button>
    );
};
