import * as React from 'react';
import {AddOnType, PaymentType} from "shared/@types";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  
  align-self: start;
  padding: 0px 15px 0px 15px;
`;

const AddOn = styled.div`
  font-weight: 500;
  font-size: var(--font-small);
  color: var(--cool-gray);
`;

const Payment = styled.div`
  font-weight: 700;
  font-size: var(--font-small);
  color: var(--marine-blue);
`

type Props = {
    addOn: AddOnType,
    payment: PaymentType,
};

export const AddOnSummaryItem = (props: Props) => {
    const {addOn, payment} = props;

    return (
        <StyledContainer>
            <AddOn>{addOn}</AddOn>
            <Payment>{payment}</Payment>
        </StyledContainer>
    );
};
