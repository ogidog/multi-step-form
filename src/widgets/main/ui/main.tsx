import * as React from 'react';
import styled from "styled-components";
import {Outlet} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectCurrentStepNumber} from "shared/slices/controlSlice";
import {Step1Form} from "widgets/step1-form/ui/step1-form";
import {Step2Form} from "widgets/step2-form/ui/step2-form";

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
                return <Step1Form/>
            case 2:
                return <Step2Form/>
            default:
                return <Step1Form/>
        }
    }
    return (
        <StyledContainer>
            {selectStepContent()}
            {/*<Outlet/>*/}
        </StyledContainer>
    );
};
