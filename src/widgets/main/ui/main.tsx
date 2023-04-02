import * as React from 'react';
import styled from "styled-components";
import {Outlet} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectCurrentStepNumber} from "shared/slices/controlSlice";
import {Step1Form} from "widgets/step1-form/ui/step1-form";
import {Step2Form} from "widgets/step2-form/ui/step2-form";
import {Step3Form} from "widgets/step3-form/ui/step3-form";
import {Step4Form} from "widgets/step4-form/ui/step4-form";

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
            case 3:
                return <Step3Form/>
            case 4:
                return <Step4Form/>
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
