import styled from 'styled-components';

export const TableSection = styled.table`
  display: flex;
  width: 1168px;
  flex-direction: column;
  margin: 0;
  table-layout: fixed;
  border-collapse: collapse;
  border-radius: 32px;
  background-color: ${(props) => props.theme.white};
  overflow: auto;
`;

export const StyledTh = styled.th`
  padding: 10px 0;
  font-size: var(--default-fs);
  color: ${(props) => props.theme.blue4};
  width: 292px;
`;

export const StyledTd = styled.td`
  border-top: 1px solid rgba(34, 36, 38, 0.1);
  justify-content: center;
  font-weight: 400;
  font-size: 16px;
  padding: 10px 0;
  text-align: center;
  width: 292px;
  color: ${(props) => props.theme.blue4};
`;

export const StyledTr = styled.tr`
  display: flex;
  justify-content: space-between;
  &:hover {
    background-color: ${(props) => props.theme.grey};
    cursor: pointer;
  }
`;

export const StyledThead = styled.thead`
  box-shadow: rgb(31 31 31 / 15%) 0 4px 20px -2px;
`;

export const Preloader = styled.img`
  width: 300px;
  height: 300px;
  justify-self: center;
  margin: 60px auto;
  background-color: inherit;
`;