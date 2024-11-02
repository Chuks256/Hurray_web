
import {styled} from "styled-components"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { IoArrowBack } from "react-icons/io5";

const Container = styled.div`
padding-top:20px;
display:flex;
flex-direction:column;
`;

const SubContainer =styled.div`
display:flex;
flex-direction:column;
gap:14em;
`;

const SwapHeader=styled.div`
align-items:center;
justify-content:center;
gap:7em;
color:ivory;
display:flex;
`;

const SwapHeaderTxt=styled.b`
font-size:14px;
`;
const SwapInputContainer = styled.div`
padding-top:40px;
display:flex;
align-items:center;
flex-direction:column;
gap:2.5em;
`;
const PhoneInputContainer = styled.div`
display:flex;
flex-direction:column;
gap:5px;
color:ivory;
`;

const NetworkInputContainer = styled.div`
display:flex;
flex-direction:column;
gap:5px;
color:ivory;
`;
const SwapBtn = styled.button`
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

const PhoneInput=styled.input`
padding:12px;
border-radius:5px;
width:250px;
`;

const NetworkInput =styled.input`
padding:12px;
border-radius:5px;
width:250px;
`;

const PhoneInputTxtContainer = styled.b`
font-size:13px;
`;

const NetworkInputTxtContainer = styled.b`
font-size:13px;
`;

const BtnParentContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`;

const BtnDetails=styled.p`
font-size:12px;
color:ivory;
width:200px;
text-align:center;
`;
const Bolden=styled.b`
`;

function Swap() {
    return (
      <Container>

        <SwapHeader>
          <IoArrowBack style={{cursor:"pointer"}} size={20} />
          <SwapHeaderTxt>Swap</SwapHeaderTxt>
          <div></div>
        </SwapHeader>

        <SubContainer>
        <SwapInputContainer>
          
          <PhoneInputContainer>
            <PhoneInputTxtContainer>Phone</PhoneInputTxtContainer>
            <PhoneInput type="number" />
          </PhoneInputContainer>

          <NetworkInputContainer>
            <NetworkInputTxtContainer>Network</NetworkInputTxtContainer>
            <NetworkInput />
          </NetworkInputContainer>
        </SwapInputContainer>

        <BtnParentContainer>
          <BtnDetails>
          Your <Bolden>Hurray Points </Bolden>will be automatically converted to data
          </BtnDetails>
        <SwapBtn>Swap</SwapBtn>
        </BtnParentContainer>
          
        </SubContainer>
       
      </Container>
    )
  }
  
  export default Swap;
  