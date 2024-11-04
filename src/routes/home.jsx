import Nav from '@/components/nav/index.jsx';
import VideoPreview from '@/components/videoPreview';
import Filter from '@/components/filter';
import Ranking from '@/components/ranking';
import Banner from '@/components/banner';
import Header from '@/components/header';
import styled from 'styled-components';
  
  const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  gap: 20px;
  overflow: scroll;
  box-sizing: border-box;
`;

export default function Home() {
  return (
      <ContentContainer>
        <Header />
        <Ranking />
        <Banner />
        <Filter />
        <VideoPreview />
      </ContentContainer>
  );
}