import * as React from 'react';
import {BillingType, PaymentType} from "shared/@types";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 0px 15px 0px 15px;
`;

const Payment = styled.div`
  font-weight: 700;
  font-size: var(--font-normal);
  color: var(--purplish-blue);
`;

const Label = styled.div`
  font-weight: 500;
  font-size: var(--font-normal);
  color: var(--cool-gray);
`;

type Props = {
    billing: BillingType;
    totalPayment: PaymentType;
};

export const TotalPayment = (props: Props) => {
    const {billing, totalPayment} = props;

    return (
        <StyledContainer>
            <Label>Total (per {billing})</Label>
            <Payment>{totalPayment}</Payment>
        </StyledContainer>
    );
};
