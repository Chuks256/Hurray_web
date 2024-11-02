
import { useNavigate } from "react-router-dom";
import {styled} from "styled-components"
import celebrate from "../assets/celebrate.png"

const Container = styled.div`
background:var(--celebrate-bg-theme);
width:100%;
height:100%;
position:absolute;
top:0px;
left:0px;
display:flex;
flex-direction:column;
align-items:center;
`;

const MainContainer = styled.div`
display:flex;
flex-direction:column;
justify-center:center;
align-items:center;
gap:250px;
padding-top:60px;
`;

const CongratulatoryParentContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
text-align:center;
gap:10px;
`;

const CongratulationTxtDetails = styled.p`
color:ivory;
font-size:13px;
width:230px;
text-align:center;
`;

const CongratulationBtnParentContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`;

const CongratulationBtnTxt = styled.p`
color:ivory;
font-size:13px;
`;

const CongratulationBtn = styled.button`
background:ivory;
padding:15px;
font-size:12px;
width:280px;
border-radius:5px;
font-weight:bold;
cursor:pointer;
transition:linear,200ms;
&:focus{
transform:scale(90%);
}
`;

const CelebrateImg=styled.img``;


function Congratulation() {
  const navigateObj=useNavigate();

  const moveToApp=()=>{
    navigateObj("/app")
  }

    return (
      <Container>

        <MainContainer>
        <CongratulatoryParentContainer>
          <CelebrateImg src={celebrate} />
          <CongratulationTxtDetails>Nice one chad , you just earned yourself <b>50 Hurray Points</b> </CongratulationTxtDetails>
        </CongratulatoryParentContainer>

        <CongratulationBtnParentContainer>
          <CongratulationBtnTxt>Come tomorrow for more</CongratulationBtnTxt>
          <CongratulationBtn onClick={()=>{moveToApp()}}>Ok,Thanks Dawg</CongratulationBtn>
        </CongratulationBtnParentContainer>
        </MainContainer>
        
      </Container>
    )
  }
  
  export default Congratulation;
  