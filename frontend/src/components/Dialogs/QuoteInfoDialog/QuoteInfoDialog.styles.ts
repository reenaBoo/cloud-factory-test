import styled from 'styled-components';

export const QuoteInfoDialogText = styled.p`
  font-size: var(--default-fs);
  color: ${(props) => props.theme.blue4};
  margin: 0 auto;
  @media (max-width: 968px) {
    font-size: var(--small-fs);
  }
`;
