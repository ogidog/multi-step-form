import * as React from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {nextStep, selectCurrentStepNumber} from "shared/slices/controlSlice";
import {StepNumberType} from "../../../shared/@types";

const Button = styled.button<{ currentStepNumber: StepNumberType }>`
  box-sizing: border-box;

  width: 110px;
  height: 40px;

  border-width: 0px;
  border-radius: 3px;

  background-color: var(--purplish-blue);

  color: var(--white);
  font-size: var(--font-normal);
  font-weight: 400;

  display: ${props => props.currentStepNumber === 4 ? 'block' : 'none'};

  grid-area: right;
  justify-self: end;

`

export const ConfirmButton = () => {
    const currentStepNumber: StepNumberType = useSelector(selectCurrentStepNumber);
    const dispatch = useDispatch();

    const clickHandler = () => {
        dispatch(nextStep())
    }

    return (
        <Button currentStepNumber={currentStepNumber} onClick={clickHandler}>Confirm</Button>
    );
};
