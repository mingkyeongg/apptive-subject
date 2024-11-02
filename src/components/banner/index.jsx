import styled from "styled-components";
import Arrow from "@/assets/icon/Arrow.svg";

const GradientBackground = styled.div`
  width: 325px;
  height: 95px;
  background: linear-gradient(#F7A6A6, #FD7070, #F29539, #FAC60E);
  border-radius: 8px;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
`;

const Text = styled.p`
  font-size: 15px;
  font-weight: 700;
  color: white;
  line-height: 17px;
  `;

const Button = styled.button`
  width: 114px;
  height: 25px;
  background: #2C1E1E;
  font-size: 10px;
  color: #fff;
  border-radius: 5px;
  border: none;
  position: absolute;
  bottom: 10px;
  right: 10px;
  cursor: pointer;
`;

const Icon = styled.img`
  width: 8px;
  height: 8px;
  fill: #fff;
`;


export default function Banner() {
  return (
    <GradientBackground>
      <Text>우리 지역을</Text>
      <Text><u>가장 쉽게</u> 알리는 방법은?</Text>
      <Button>비용 없이 홍보하기 <Icon src={Arrow} /></Button>
    </GradientBackground>
  );
}