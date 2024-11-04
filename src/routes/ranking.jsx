import RankingList from "@/components/rankingList";
import styled from "styled-components";
import Switch from "@/components/switch";

const RankingListContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  align-items: center;
  width: 375px;
`;

export default function Ranking() {
  return (
    <RankingListContainer>
      <Switch />
      <RankingList />
    </RankingListContainer>
  );
}