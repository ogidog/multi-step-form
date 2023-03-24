import * as React from 'react';
import styled from "styled-components";
import {Step1Content} from "../../step1-content/ui/step1-content";

const StyledContainer = styled.div`
  @media (max-width: 1024px) {
    padding: 0px 20px 0px 20px;
  }

  @media (min-width: 1025px) {
    grid-area: main
  }

  position: relative;
`

export const Main = () => {
    return (
        <StyledContainer>
            <Step1Content/>
        </StyledContainer>
    );
};
