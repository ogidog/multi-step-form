import * as React from 'react';
import styled from "styled-components";

import bgSidebarMobileImg from "./assets/bg-sidebar-mobile.svg";
import bgSidebarDesktopImg from "./assets/bg-sidebar-desktop.svg";
import {FC} from "react";
import {StepNumber} from "entities/index";

const StyledContainer = styled.div`
  @media (max-width: 1024px)  {
    background-image: url(${bgSidebarMobileImg});
  }

  @media (min-width: 1025px) {
    background-image: url(${bgSidebarDesktopImg});
    grid-area: side-bar;

    border-radius: 15px;

    padding: 30px 30px 0px 50px;
  }
  
  background-repeat: no-repeat;
  background-size: cover;
  
`

export const Sidebar:FC = () => {
    return (
        <StyledContainer>
            <StepNumber stepNumber={2} stepDescription={"select plan"}/>
        </StyledContainer>
    );
};
