import * as React from 'react';
import styled from "styled-components";
import {ConfirmButton, NextStepButton, PrevStepButton} from "entities/index";

const StyledContainer = styled.div`
  @media (max-width: 1024px) {
    box-sizing: border-box;
    
    background-color: var(--white);
    
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "left right";
    grid-auto-columns: 4px;
    align-items: center;
    
    height: 100%;
    width: 100%;
    padding: 0px 15px 0px 15px;
  }

  @media (min-width: 1025px) {
    grid-area: footer;
  }

`
export const Footer = () => {

    return (
        <StyledContainer>
            <PrevStepButton />
            <NextStepButton/>
            <ConfirmButton/>
        </StyledContainer>
    );
};
