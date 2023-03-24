import * as React from 'react';
import styled from "styled-components";

import bgSidebarMobileImg from "./assets/bg-sidebar-mobile.svg";
import bgSidebarDesktopImg from "./assets/bg-sidebar-desktop.svg";
import {FC} from "react";
import {StepNumber} from "entities/index";

const StyledContainer = styled.div`
  @media (max-width: 1024px)  {
    display: flex;
    justify-content: center;
    
    padding: 7% 0px 15% 0px;
    
    background-image: url(${bgSidebarMobileImg});
    
  }

  @media (min-width: 1025px) {
    grid-area: side-bar;
    
    display: grid;
    grid-template-rows: repeat(4, fit-content(50px));
    grid-row-gap: 50px;

    background-image: url(${bgSidebarDesktopImg});
    
    border-radius: 15px;

    padding:  15% 0px 0px 15%;
    
  }
  
  background-repeat: no-repeat;
  background-size: cover;
  
`

export const Sidebar:FC = () => {
    return (
        <StyledContainer>
            <StepNumber stepNumber={1} stepDescription={"your info"}/>
            <StepNumber stepNumber={2} stepDescription={"select plan"}/>
            <StepNumber stepNumber={3} stepDescription={"add-ons"}/>
            <StepNumber stepNumber={4} stepDescription={"summary"}/>
        </StyledContainer>
    );
};
