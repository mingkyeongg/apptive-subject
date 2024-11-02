import styled from "styled-components";

const FilterContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const ColorButton = styled.button`
  width: 48px;
  height: 30px;
  background-color: #ff5566;
  border: none;
  border-radius: 22px;
  cursor: pointer;
  color: #fff;
  font-size: 12px;
`;

const DefaultButton = styled.button`
  width: 48px;
  height: 30px;
  background-color: #fff;
  border-radius: 22px;
  border: 1px solid #d4d4d4;
  font-size: 12px;
  color: #585858;
`;

export default function Filter() {
  return (
    <FilterContainer>
      <ColorButton>행사</ColorButton>
      <DefaultButton>정책</DefaultButton>
      <DefaultButton>관광</DefaultButton>
      <DefaultButton>이슈</DefaultButton>
    </FilterContainer>
  );
}