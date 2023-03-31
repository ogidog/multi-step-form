import * as React from 'react';
import styled from "styled-components";
import {IControlSlice} from "shared/slices/controlSlice";
import {FC} from "react";
import {TOTAL_STEPS} from "shared/lib/const";

const Button = styled.button<Props>`
  box-sizing: border-box;

  width: fit-content;
  height: 40px;
  padding-left: 15px;
  padding-right: 15px;

  border-width: 0px;
  border-radius: 3px;

  background-color: var(--marine-blue);

  color: var(--white);
  font-size: var(--font-small);
  font-weight: 400;

  visibility: ${props => props.totalSteps === props.currentStepNumber ? 'hidden' : 'visible'};
`

type Props = {totalSteps: number} & Pick<IControlSlice, "currentStepNumber">;


export const NextStepButton: FC<Props> = (props) => {
    return (
        <Button totalSteps={TOTAL_STEPS} currentStepNumber={props.currentStepNumber} type={"submit"}
                form={`step${props.currentStepNumber}`}>Next Step</Button>
    );
};
