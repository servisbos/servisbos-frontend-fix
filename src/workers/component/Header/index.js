import React, { Component } from "react";
import styled from "styled-components";

const StyledBody = styled.nav`
padding-top: 56px;
margin-bottom: 62px;
background: #f8f8f8;
color: #777 !important;
font-family: "Poppins", Helvetica, sans-serif;
font-size: 0.875rem;
overflow-x: hidden;
margin: 0;
font-weight: 400;
line-height: 1.5;
text-align: left;
display: block;
`;

class Header extends Component {
    render() {
        return (
            <StyledBody/>
            
        );
    }
}

export default Header;
