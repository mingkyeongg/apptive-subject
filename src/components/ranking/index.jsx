import styled from "styled-components";
import RankingItem from "@/components/ranking/RankingItem";

const RankingItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 325px;
`;

export default function Ranking() {
  return (
    <RankingItemContainer>
      <RankingItem src={"https://picsum.photos/200"} rank={1} cityName={'부산광역시'} cityEnglishName={'Busan'} likes={'12.3k'}/>
      <RankingItem src={"https://picsum.photos/201"} rank={1} cityName={'밀양시, 경상남도'} cityEnglishName={'Miryang'} likes={'12.3k'}/>
      <RankingItem src={"https://picsum.photos/202"} rank={1} cityName={'거제시, 경상남도'} cityEnglishName={'Miryang'} likes={'12.3k'}/>
    </RankingItemContainer>
  );
}