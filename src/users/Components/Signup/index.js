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

const RegisterForm = styled.div`
  margin: 60px auto;
  color: #fff;
`;

const JustifyContent = styled.div`
  -webkit-box-pack: center !important;
  justify-content: center !important;
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`;

const ColMd5 = styled.div`
  -webkit-box-flex: 0;
  -ms-flex: 0 0 45%;
  flex: 0 0 45%;
  max-width: 45%;
`;

const BoxForm = styled.div`
  background-color: #fff;
  padding: 30px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  border-radius: 5px;
  -webkit-box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.3);
  margin-bottom: 25px;
  color: #555555;
`;

const FormGroup = styled.div`
  margin-bottom: 25px;
`;

const FormInputControl = styled.input`
  font-size: 0.875rem;
  min-height: 40px;
  border-color: #e1e8ed;
  display: block;
  width: 100%;
  padding: 0.75rem 0.25rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;

const PassInfo = styled.div`
  width: 100%;
  margin-bottom: 15px;
  color: #555;
  text-align: center;
  font-size: 12px;
  font-size: 0.75rem;
  padding: 5px 0 3px 0;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  -ms-border-radius: 3px;
  border-radius: 3px;
`;

class Signup extends Component {
  render() {
    return (
      <Main>
        <BackgroundBlue>
          <Container>
            <RegisterForm>
              <JustifyContent>
                <ColMd5>
                  <form>
                    <BoxForm>
                      <FormGroup>
                        <label>Username</label>
                        <FormInputControl
                          type="text"
                          placeholder="Your username"
                        />
                      </FormGroup>
                      <FormGroup>
                        <label>Email</label>
                        <FormInputControl
                          type="email"
                          placeholder="Your email address"
                        />
                      </FormGroup>
                      <FormGroup>
                        <label>First Name</label>
                        <FormInputControl
                          type="text"
                          placeholder="Your first name"
                        />
                      </FormGroup>
                      <FormGroup>
                        <label>Last Name</label>
                        <FormInputControl
                          type="text"
                          placeholder="Your last name"
                        />
                      </FormGroup>
                      <FormGroup>
                        <label>Address</label>
                        <FormInputControl
                          type="text-area"
                          placeholder="Your address"
                        />
                      </FormGroup>
                      <FormGroup>
                        <label>City</label>
                        <FormInputControl
                          type="text-area"
                          placeholder="Your city"
                        />
                      </FormGroup>
                      <FormGroup>
                        <label>Province</label>
                        <FormInputControl
                          type="text-area"
                          placeholder="Your province"
                        />
                      </FormGroup>
                      <FormGroup>
                        <label>Postal Code</label>
                        <FormInputControl
                          type="number"
                          placeholder="Your postal code"
                        />
                      </FormGroup>
                    </BoxForm>
                  </form>
                </ColMd5>
              </JustifyContent>
            </RegisterForm>
          </Container>
        </BackgroundBlue>
      </Main>
    );
  }
}

export default Signup;
