import React, { Component } from "react";
import styled from "styled-components";

const StyledMain = styled.div`
  background: #f5f8fa;
  position: relative;
  z-index: 1;
`;
const BackgroundColor = styled.div`
  background: #3f4079;
`;
const MarginContainer = styled.div`
  width: 100%;
  padding-top: 60px;
  padding-bottom: 35px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`;
const FormLogin = styled.div`
  width: 650px;
  margin: 60px auto;
  color: #fff;
`;

const BoxForm = styled.div`
  height: 250px;
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
  color: #fff;
`;

const BoxLogin = styled.div`
  width: 50%;
  float: left;
  border-right: 1px solid #e1e8ed;
  padding: 15px 25px;
`;
const BoxLoginLast = styled.div`
  width: 50%;
  float: left;
  border-right: 1px solid #e1e8ed;
  padding: 15px 25px;
  border-right: 0;
`;

const FormGroup = styled.div`
  margin-bottom: 25px;
`;

const InputGroup = styled.input`
    display: block;
    width: 100%;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
`;
const ButtonLogin = styled.input`
  border: none;
  color: #fff;
  background: #e74e84;
  cursor: pointer;
  padding: 7px 20px;
  display: inline-block;
  outline: none;
  font-size: 14px;
  font-size: 0.875rem;
`;

const AnchorFacebook = styled.a`
  border-radius: 3px;
  text-align: center;
  color: #fff;
  min-width: 200px;
  margin-bottom: 15px;
  display: block;
  padding: 12px;
  line-height: 1;
  position: relative;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  background-color: #3b5998;
`;
const AnchorGoogle = styled.a`
  border-radius: 3px;
  text-align: center;
  color: #fff;
  min-width: 200px;
  margin-bottom: 15px;
  display: block;
  padding: 12px;
  line-height: 1;
  position: relative;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  background-color: #dc4e41;
`;
const AnchorLinkedin = styled.a`
  border-radius: 3px;
  text-align: center;
  color: #fff;
  min-width: 200px;
  margin-bottom: 15px;
  display: block;
  padding: 12px;
  line-height: 1;
  position: relative;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  background-color: #0077b5;
`;
class Login extends Component {
  render() {
    return (
      <StyledMain>
        <BackgroundColor>
          <MarginContainer>
            <FormLogin>
              <h2>Login to Servisbos</h2>
              <form>
                <BoxForm>
                  <BoxLogin>
                    <AnchorFacebook>Login with Facebook</AnchorFacebook>
                    <AnchorGoogle>Login with Google</AnchorGoogle>
                    <AnchorLinkedin>Login with Linkedin</AnchorLinkedin>
                  </BoxLogin>
                  <BoxLoginLast>
                    <FormGroup>
                      <InputGroup
                        type="email"
                        placeholder="Your email address"
                      />
                    </FormGroup>
                    <FormGroup>
                      <InputGroup type="password" placeholder="Your password" />
                    </FormGroup>
                    <FormGroup>
                      <ButtonLogin type="submit" value="Login" />
                    </FormGroup>
                  </BoxLoginLast>
                </BoxForm>
              </form>
            </FormLogin>
          </MarginContainer>
        </BackgroundColor>
      </StyledMain>
    );
  }
}

export default Login;
