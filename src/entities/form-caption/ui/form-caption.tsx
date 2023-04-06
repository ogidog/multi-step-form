import * as React from 'react';
import styled from "styled-components";

const Title = styled.div`
  font-weight: 700;
  color: var(--marine-blue);
  
  @media (min-width: 1024px) {
    font-size: var(--font-largest);
  }

  @media (max-width: 1023px) {
    font-size: var(--font-large);
  }
`;

const Hint = styled.div`
  box-sizing: border-box;
  font-weight: 400;
  color: var(--cool-gray);
  font-size: var(--font-medium);
  height: 50px;
  padding-top: 10px;
`;

type Props = {
    title: string,
    hint: string,
};

export const FormCaption = (props: Props) => {
    const {title, hint} = props;

    return (
        <div>
            <Title>{title}</Title>
            <Hint>{hint}</Hint>
        </div>
    );
};
