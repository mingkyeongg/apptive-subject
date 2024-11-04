import RankingList from "@/components/rankingList";
import styled from "styled-components";

const RankingListContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

export default function Ranking() {
  return (
    <RankingListContainer>
      <RankingList />
    </RankingListContainer>
  );
}