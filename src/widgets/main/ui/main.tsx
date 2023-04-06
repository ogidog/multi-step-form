import * as React from 'react';
import styled from "styled-components";
import {useSelector} from "react-redux";
import {selectCurrentStepNumber} from "shared/slices/controlSlice";
import {Step1Form, Step2Form, Step3Form, Step4Form, ThanksForm} from "widgets/index";

const StyledContainer = styled.div`
  @media (max-width: 1023px) {
    padding: 0px 20px 0px 20px;
  }

  @media (min-width: 1024px) {
    box-sizing: border-box;
    padding: 50px 100px 50px 100px;
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
            case 5:
                return <ThanksForm/>
            default:
                return <div></div>
        }
    }
    return (
        <StyledContainer>
            {selectStepContent()}
        </StyledContainer>
    );
};
