import * as React from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {selectPlan} from "../../../shared/slices/step2Slice";
import {setStep} from "../../../shared/slices/controlSlice";

const StyledContainer = styled.div`
  display: grid;
  grid-template-areas: "plan payment"
                       "change payment";
  grid-row-gap: 5px;

  align-items: center;
`;

const Plan = styled.div`
  font-weight: 500;
  font-size: var(--font-small);
  color: var(--marine-blue);
  grid-area: plan;
`

const ChangePlan = styled.div`
  font-weight: 500;
  font-size: var(--font-small);
  color: var(--cool-gray);
  text-decoration: underline;
  grid-area: change;
`

export const SummaryPlan = () => {
    const plan = useSelector(selectPlan);
    const dispatch = useDispatch();

    const changeClickHandler = ()=>{
        dispatch(setStep(2))
    }
    return (
        <StyledContainer>
            <Plan>{plan}</Plan>
            <ChangePlan onClick={changeClickHandler}>Change</ChangePlan>
        </StyledContainer>
    );
};
