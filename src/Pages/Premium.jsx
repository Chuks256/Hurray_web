
import { useNavigate } from "react-router-dom";
import {styled} from "styled-components"
import crown from "../assets/crown.png"

const Container = styled.div`
background:var(--royal-bg-theme);
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
gap:280px;
padding-top:60px;
`;

const PremiumParentContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
text-align:center;
gap:10px;
`;

const PremiumTxtDetails = styled.p`
color:ivory;
font-size:13px;
width:250px;
text-align:center;
`;

const PremiumBtnParentContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`;

const PremiumBtnTxt = styled.p`
color:ivory;
font-size:13px;
`;

const PremiumBtn = styled.button`
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

const PremiumImg=styled.img`
width:150px;
`;


function Premium() {
    return (
      <Container>

        <MainContainer>
        <PremiumParentContainer>
          <PremiumImg src={crown} />
          <PremiumTxtDetails><b>All Hail The King</b> You have reached the limit , now you wait for swapping  date </PremiumTxtDetails>
        </PremiumParentContainer>

        <PremiumBtnParentContainer>
          <PremiumBtn>Ok,Thanks </PremiumBtn>
        </PremiumBtnParentContainer>
        </MainContainer>
        
      </Container>
    )
  }
  
  export default Premium;
  