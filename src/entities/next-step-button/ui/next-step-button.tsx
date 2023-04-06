import * as React from 'react';
import styled from "styled-components";
import {selectCurrentStepNumber} from "shared/slices/controlSlice";
import {FC} from "react";
import {useSelector} from "react-redux";
import {StepNumberType} from "../../../shared/@types";

const Button = styled.button<{ currentStepNumber: StepNumberType }>`
  box-sizing: border-box;

  width: 110px;
  height: 40px;
  padding-left: 15px;
  padding-right: 15px;

  border-width: 0px;
  border-radius: 7px;

  background-color: var(--marine-blue);

  color: var(--white);
  font-size: var(--font-normal);
  font-weight: 400;

  display: ${props => props.currentStepNumber >= 4 ? 'none' : 'block'};
  
  grid-area: right;
  justify-self: end;

  cursor: pointer;
  
`

export const NextStepButton: FC = () => {
    const currentStepNumber = useSelector(selectCurrentStepNumber);

    return (
        <Button currentStepNumber={currentStepNumber} type={"submit"}
                form={`step${currentStepNumber}`}>Next Step</Button>
    );
};
