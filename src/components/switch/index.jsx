import React, { useState } from 'react';
import styled from 'styled-components';

const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #f0f0f0;
  border-radius: 25px;
  padding: 5px;
  width: fit-content;
  margin-top: 20px;
`;

const SwitchButton = styled.button`
  padding: 10px 20px;
  border: none;
  background-color: ${({ active }) => (active ? '#fff' : 'transparent')};
  color: #333;
  font-size: 14px;
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
  border-radius: 20px;
  box-shadow: ${({ active }) => (active ? '0 0 5px rgba(0, 0, 0, 0.1)' : 'none')};
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.3s;

  &:focus {
    outline: none;
  }
`;

export default function Switch() {
  const [activeButton, setActiveButton] = useState('weekly');

  return (
    <SwitchContainer>
      <SwitchButton
        active={activeButton === 'weekly'}
        onClick={() => setActiveButton('weekly')}
      >
        주간 조회수 순위
      </SwitchButton>
      <SwitchButton
        active={activeButton === 'cumulative'}
        onClick={() => setActiveButton('cumulative')}
      >
        전체 조회수 순위
      </SwitchButton>
    </SwitchContainer>
  );
}
