import styled from "styled-components"
import NotificationIcon from "@/assets/icon/Notification.svg";
import SearchIcon from "@/assets/icon/Search.svg";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
`;

const Heading = styled.h1`
  font-size: 25px;
  font-weight: 700;
`;

const IconContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Heading>Logo</Heading>
      <IconContainer>
        <img src={NotificationIcon} alt="Notification" />
        <img src={SearchIcon} alt="Search" />
      </IconContainer>
    </HeaderContainer>
  )
}