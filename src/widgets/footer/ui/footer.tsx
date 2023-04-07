import * as React from 'react';
import styled from "styled-components";
import {ConfirmButton, NextStepButton, PrevStepButton} from "entities/index";
import {StepNumberType} from "shared/@types";
import {useSelector} from "react-redux";
import {selectCurrentStepNumber} from "shared/slices/controlSlice";
import {TOTAL_STEPS} from "shared/lib/const";

const StyledContainer = styled.div<{ currentStepNumber: StepNumberType }>`
  
  display: ${props => props.currentStepNumber === TOTAL_STEPS ? "none" : "grid"};;
  grid-template-areas: "left right";
  align-items: center;

  background-color: var(--white);
  box-sizing: border-box;
  
  @media (max-width: 1023px) {
    height: 100%;
    width: 100%;
    padding: 0px 15px 0px 15px;
    
  }

  @media (min-width: 1024px) {
    grid-area: footer;
    padding: 0px 100px 0px 100px;
  }

`
export const Footer = () => {

    const currentStepNumber = useSelector(selectCurrentStepNumber);

    return (
        <StyledContainer currentStepNumber={currentStepNumber}>
            <PrevStepButton/>
            <NextStepButton/>
            <ConfirmButton/>
        </StyledContainer>
    );
};
