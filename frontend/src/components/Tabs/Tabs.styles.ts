import styled from 'styled-components';

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const Tab = styled.button<{ $isActive: boolean }>`
  font-size: 20px;
  padding: 10px 50px;
  cursor: pointer;
  background: ${(props) => props.theme.blue4};
  color: ${(props) => props.theme.white};
  border: 0;
  outline: 0;
  opacity: ${({$isActive}) => $isActive ? 1 : 0.6};
  border-radius: 10px 0 0 10px;
  &:last-of-type {
      border-radius: 0 10px 10px 0;
  }
`;
