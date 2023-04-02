import * as React from 'react';
import styled from "styled-components";
import {SummaryPlan} from "../../../entities";

const StyledContainer = styled.div`
  @media (max-width: 1024px) {
    display: grid;
    grid-template-rows: 50px 60px 200px 1fr;

    box-sizing: border-box;
    border-radius: 10px;
    background-color: var(--white);

    position: relative;
    top: -25px;

    width: 100%;
    height: 100%;

    padding: 30px 15px 30px 15px;
  }
  @media (min-width: 1025px) {

  }
`;

const Title = styled.div`
  font-weight: 700;
  color: var(--marine-blue);
  font-size: var(--font-large);
`;

const Hint = styled.div`
  font-weight: 400;
  color: var(--cool-gray);
  font-size: var(--font-medium);

`;

const SummaryChoice = styled.div`
  display: grid;
  grid-template-rows: 80px 40px 40px;
  grid-row-gap: 5px;
  align-items: end;
    
  width: 100%;
  height: 100%;
  
  background-color: var(--alabaster);
  
  border-radius: 5px;
`

export const Step4Form = () => {
    return (
        <StyledContainer>
            <Title>Finishing Up</Title>
            <Hint>Double-check everything looks OK before confirming.</Hint>
            <SummaryChoice>
                <SummaryPlan/>
            </SummaryChoice>
        </StyledContainer>
    );
};
