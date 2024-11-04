import HomeIcon from '@/assets/icon/Home.svg';
import RankingIcon from '@/assets/icon/Ranking.svg';
import ShortformIcon from '@/assets/icon/Shortform.svg';
import UploadIcon from '@/assets/icon/Upload.svg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 24px;
    height: 24px;
  }
  p {
    font-size: 7px;
  }
`;

const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 375px;
  height: 58px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  align-items: center;
`;

function Navigation() {
  return (
    <NavigationContainer>
      <StyledLink to="/">
        <ImgContainer>
          <img src={HomeIcon} alt="Home" />
          <p>홈</p>
        </ImgContainer>
      </StyledLink>
      <StyledLink to="/ranking">
        <ImgContainer>
          <img src={RankingIcon} alt="Ranking" />
          <p>랭킹</p>
        </ImgContainer>
      </StyledLink>
      <StyledLink to="/shortform">
        <ImgContainer>
          <img src={ShortformIcon} alt="Shortform" />
          <p>숏폼</p>
        </ImgContainer>
      </StyledLink>
      <StyledLink to="/upload">
        <ImgContainer>
          <img src={UploadIcon} alt="Upload" />
          <p>업로드</p>
        </ImgContainer>
      </StyledLink>
    </NavigationContainer>
  );
}

export default Navigation;
