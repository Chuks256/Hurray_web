import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import hurray_logo from "../assets/hurray_logo.png";

const Container =styled.div`
display:flex;
flex-direction:column;
justify-center:center;
align-items:center;
gap:300px;
padding-top:120px;
`;

const SplashDetails = styled.p`
font-size:12px;
color:ivory;
text-align:center;
width:200px;
`;
const SubContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
gap:10px;
`;

const ClaimButton = styled.button`
background:ivory;
padding:12px;
font-size:12px;
width:250px;
border-radius:5px;
font-weight:bold;
cursor:pointer;
transition:linear,200ms;
&:focus{
transform:scale(90%);
}
`;

const LogoImg = styled.img``;


function Splash() {
  return (
    <Container>
      <LogoImg src={hurray_logo} />

      <SubContainer>
        <SplashDetails>
        Claim <b>Hurray</b> point which wll be later converted to data
        </SplashDetails>
        <ClaimButton>Start Claiming</ClaimButton>
      </SubContainer>

    </Container>
  )
}

export default Splash;
