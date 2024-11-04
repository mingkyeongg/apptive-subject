import heartIcon from "@/assets/icon/heart.svg";
import styled from "styled-components";

const RankingElementContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 70px;
  border-bottom: 1px solid #E1E1E1;
  width: 361px;
`;

const Rank = styled.p`
  font-size: 14px;
  font-weight: bold;
  `;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Title = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

const ViewCount = styled.p`
  font-size: 14px;
  color: #606060;
`;

const Thumbnail = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid #000;
`;

const LikeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

const Icon = styled.img`
  width: 15px;
  height: 15px;
  fill: #EC0039;
`;

const Likes = styled.p`
  font-size: 12px;
  color: #606060;
`;

export default function RankingElement({ rank, title, viewCount, thumbnail, likeCount}) {
  return (
    <RankingElementContainer>
      <Rank>{rank}</Rank>
      <Thumbnail src={thumbnail} alt="thumbnail" />
      <TitleContainer>
        <Title>{title}</Title>
        <ViewCount>{viewCount}</ViewCount>
      </TitleContainer>
      <LikeContainer>
        <Icon src={heartIcon} alt="heart" />
        <Likes>{likeCount}</Likes>
      </LikeContainer>  
    </RankingElementContainer>
  );
}
