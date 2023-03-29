import * as React from 'react';
import styled from "styled-components";
import {Outlet} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectCurrentStepNumber} from "shared/slices/controlSlice";
import {Step1Content} from "widgets/step1-content/ui/step1-content";
import {Step2Content} from "widgets/step2-content/ui/step2-content";

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
    const currentStepNumber = useSelector(selectCurrentStepNumber);

    const selectStepContent = () => {
        switch (currentStepNumber) {
            case 1:
                return <Step1Content/>
            case 2:
                return <Step2Content/>
            default:
                return <Step1Content/>
        }
    }
    return (
        <StyledContainer>
            {selectStepContent()}
            {/*<Outlet/>*/}
        </StyledContainer>
    );
};
