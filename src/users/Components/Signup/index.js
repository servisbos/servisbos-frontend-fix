import React, { Component } from "react";
import styled from "styled-components";

const Main = styled.main`
  background: #3f4079;
  position: relative;
  min-height: 100%;
  min-width: 100%;
  z-index: 1;
`;
const BackgroundBlue = styled.div`
  background: #3f4079;
`;

const Container = styled.div`
  max-width: 1140px;
  padding-top: 60px;
  padding-bottom: 35px;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`;

class Signup extends Component {
  render() {
    return (
      <Main>
        <BackgroundBlue>
          <Container />
        </BackgroundBlue>
      </Main>
    );
  }
}

export default Signup;
