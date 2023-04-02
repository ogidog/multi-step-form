import * as React from 'react';
import styled from "styled-components";
import {IControlSlice, selectCurrentStepNumber} from "shared/slices/controlSlice";
import {FC} from "react";
import {TOTAL_STEPS} from "shared/lib/const";
import {useSelector} from "react-redux";

const Button = styled.button<{ currentStepNumber: number }>`
  box-sizing: border-box;

  width: 110px;
  height: 40px;
  padding-left: 15px;
  padding-right: 15px;

  border-width: 0px;
  border-radius: 3px;

  background-color: var(--marine-blue);

  color: var(--white);
  font-size: var(--font-normal);
  font-weight: 400;

  display: ${props => props.currentStepNumber >= 4 ? 'none' : 'block'};
  
  grid-area: right;
  justify-self: end;
  
`

export const NextStepButton: FC = () => {
    const currentStepNumber = useSelector(selectCurrentStepNumber);

    return (
        <Button currentStepNumber={currentStepNumber} type={"submit"}
                form={`step${currentStepNumber}`}>Next Step</Button>
    );
};
