import videoPreview from '@/assets/image/video_preview.jpeg';
import styled from 'styled-components';
import heartIcon from '@/assets/icon/heart.svg';

const CardContainer = styled.div`
  position: relative;
  width: 150px;
  height: 237px;
  border-radius: 15px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;

const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 15px;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Icon = styled.img`
  width: 12px;
  height: 12px;
  fill: #fff;
`;

const Title = styled.p`
  font-size: 12px;
  font-weight: bold;
`;

const SubText = styled.p`
  font-size: 11px;
  color: #d3d3d3;
`;

export default function VideoPreview() {
  return (
    <CardContainer>
      <Image src={videoPreview} alt="Video Preview" />
      <Overlay>
        <IconContainer>
          <Icon src={heartIcon} alt="heart"/>
          <span>123</span>
        </IconContainer>
        <Title>맛집 어쩌고저쩌고 123위</Title>
        <SubText>조회수 3억 8천만회</SubText>
      </Overlay>
    </CardContainer>
  );
}
