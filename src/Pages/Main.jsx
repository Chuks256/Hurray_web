
import styled from "styled-components";
import voucher from "../assets/voucher.png"
import { MdLock } from "react-icons/md";

const Container = styled.div`
display:flex;
flex-direction:column;
align-items:center;
padding-top:40px;
gap:250px;
`;

const PointImage = styled.img`
width:100px;
`;

const PointContainer = styled.div`
color:ivory;
text-align:center;
line-height:12px;
`;

const BalanceAmount = styled.b`
font-size:40px;
font-family:var(--global-bold-font);
`;

const BalanceDetails = styled.p`
font-size:13px;
`;

const BalanceParentContainer = styled.div`
display:flex;
flex-direction:column;
gap:45px;
`;

const BtnContainer = styled.div`
display:flex;
flex-direction:column;
gap:13px;
`;

const ClaimBtn = styled.button `
background:var(--lock-grey-bg-theme);
padding:13px;
font-size:12px;
color:var(--lock-grey-txt-color);
width:250px;
border-radius:5px;
font-weight:bold;
cursor:pointer;
display:flex;
transition:linear,200ms;
align-items:center;
justify-content:center;
gap:20px;
&:focus{
transform:scale(90%);
}
`;

const AboutBtn = styled.button `
background:ivory;
padding:13px;
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


function Main() {
    return (
      <Container>
        <BalanceParentContainer>
          <PointImage src={voucher} />
          <PointContainer>
            <BalanceAmount>500</BalanceAmount>
            <BalanceDetails>Hurray Points</BalanceDetails>
          </PointContainer>
        </BalanceParentContainer>
        
        <BtnContainer>
          <AboutBtn>What is Hurray ?</AboutBtn>
          <ClaimBtn>Swap Hurray Point <MdLock size={18} /> </ClaimBtn>
        </BtnContainer>

      </Container>
    )
  }
  
  export default Main;  