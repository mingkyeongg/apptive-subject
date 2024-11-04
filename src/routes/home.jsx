import Nav from '@/components/nav/index.jsx';
import VideoPreview from '@/components/videoPreview';
import Filter from '@/components/filter';
import Ranking from '@/components/ranking';
import Banner from '@/components/banner';
import Header from '@/components/header';
import styled from 'styled-components';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 375px;
  height: 812px;
  padding: 30px;
`;

export default function Home() {
  return (
    <HomeContainer>
        <Header />
        <Ranking />
        <Banner />
        <Filter />
        <VideoPreview />
        <Nav />
    </HomeContainer>
  );
}