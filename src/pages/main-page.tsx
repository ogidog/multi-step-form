import * as React from 'react';
import {FC} from "react";
import styled from "styled-components";
import {Container, Footer, Main, Sidebar} from "widgets/index";

const Page = styled.div`

  @media (min-width: 1025px) {
    padding: 100px;
  }

  display: flex;
  justify-content: center;
  align-items: center;

  box-sizing: border-box;

  height: 100vh;

  min-width: 100vw;
  min-height: 100vh;

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
