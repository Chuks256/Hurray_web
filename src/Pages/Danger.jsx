
import { useNavigate } from "react-router-dom";
import {styled} from "styled-components"
import skull from "../assets/skull.png"

const Container = styled.div`
background:var(--danger-bg-theme);
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
gap:275px;
padding-top:60px;
`;

const DangerParentContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
text-align:center;
gap:20px;
`;

const DangerTxtDetails = styled.p`
color:ivory;
font-size:14px;
width:150px;
text-align:center;
`;

const DangerBtnParentContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`;


const DangerBtn = styled.button`
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

const DangerImg=styled.img``;


function Danger() {
    return (
      <Container>

        <MainContainer>
        <DangerParentContainer>
          <DangerImg src={skull} />
          <DangerTxtDetails><b>Hey dawg</b>, you are such a cheater </DangerTxtDetails>
        </DangerParentContainer>

        <DangerBtnParentContainer>
          <DangerBtn>Damn, Thanks Anyway</DangerBtn>
        </DangerBtnParentContainer>
        </MainContainer>
        
      </Container>
    )
  }
  
  export default Danger;
  