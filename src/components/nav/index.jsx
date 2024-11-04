import HomeIcon from '@/assets/icon/Home.svg';
import RankingIcon from '@/assets/icon/Ranking.svg';
import ShortformIcon from '@/assets/icon/Shortform.svg';
import UploadIcon from '@/assets/icon/Upload.svg';
import styled from 'styled-components';

const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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
  width: 100%;
  display: flex;
  width: 325px;
}`;

function Navigation() {
  return (
  <NavigationContainer>
    <ImgContainer>
      <img src={HomeIcon} alt="Home" />
      <p>홈</p>
    </ImgContainer>
    <ImgContainer>
      <img src={RankingIcon} alt="Ranking" />
      <p>랭킹</p>
    </ImgContainer>
    <ImgContainer>
      <img src={ShortformIcon} alt="Shortform" />
      <p>숏폼</p>
    </ImgContainer>
    <ImgContainer>
      <img src={UploadIcon} alt="Upload" />
      <p>업로드</p>
    </ImgContainer>
  </NavigationContainer>
  );
}

export default Navigation;