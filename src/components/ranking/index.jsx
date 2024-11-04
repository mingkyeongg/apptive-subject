import styled from "styled-components";
import RankingItem from "@/components/ranking/RankingItem";

const RankingItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 325px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  padding: 10px;
  box-sizing: border-box;
`;

const HorizontalLine = styled.hr`
  border: 0.3px solid #d3d3d3;
  width: 100%;
  margin: 5px 0;
`;

export default function Ranking() {
  return (
    <RankingItemContainer>
      <RankingItem src={"https://picsum.photos/200"} rank={1} cityName={'부산광역시'} cityEnglishName={'Busan'} likes={'12.3k'}/>
      <HorizontalLine />
      <RankingItem src={"https://picsum.photos/201"} rank={1} cityName={'밀양시, 경상남도'} cityEnglishName={'Miryang'} likes={'12.3k'}/>
      <HorizontalLine />
      <RankingItem src={"https://picsum.photos/202"} rank={1} cityName={'거제시, 경상남도'} cityEnglishName={'Miryang'} likes={'12.3k'}/>
    </RankingItemContainer>
  );
}