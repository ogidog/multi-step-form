import * as React from 'react';
import {FC} from "react";
import styled from "styled-components";
import {NextStepButton} from "entities/index";

const StyledContainer = styled.div`
  @media (max-width: 1024px) {
    background-color: var(--white);
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    height: 100%;
    width: 100%;
  }

  @media (min-width: 1025px) {
    grid-area: footer;
  }

`
export const Footer: FC = () => {
    return (
        <StyledContainer>
            <div></div>
            <NextStepButton/>
        </StyledContainer>
    );
};
