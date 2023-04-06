import * as React from 'react';
import {FC} from "react";
import styled from "styled-components";
import {Container, Footer, Main, Sidebar} from "widgets/index";

const Page = styled.div`
  min-width: 100vw;
  height: 100vh;
  
  @media (max-width: 1023px) {
    min-height: 646px;
  }

  background-color: var(--magnolia);
`;

export const MainPage: FC = () => {
    return (
        <Page>
            <Container>
                <Sidebar/>
                <Main/>
                <Footer/>
            </Container>
        </Page>
    );
};
