import * as React from 'react';
import {FC} from "react";
import styled from "styled-components";
import {NextStepButton, PrevStepButton} from "entities/index";
import {useSelector} from "react-redux";
import {selectCurrentStepNumber} from "shared/slices/controlSlice";
import {TOTAL_STEPS} from "shared/lib/const";

const StyledContainer = styled.div`
  @media (max-width: 1024px) {
    box-sizing: border-box;
    
    background-color: var(--white);
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    height: 100%;
    width: 100%;
    padding: 0px 15px 0px 15px;
  }

  @media (min-width: 1025px) {
    grid-area: footer;
  }

`
export const Footer: FC = () => {
    const currentStepNumber = useSelector(selectCurrentStepNumber);

    return (
        <StyledContainer>
            <PrevStepButton currentStepNumber={currentStepNumber}/>
            <NextStepButton totalSteps={TOTAL_STEPS} currentStepNumber={currentStepNumber}/>
        </StyledContainer>
    );
};
