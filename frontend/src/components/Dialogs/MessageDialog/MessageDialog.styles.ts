import styled from 'styled-components';

export const MessageDialogText = styled.p`
  font-size: var(--default-fs);
  color: ${(props) => props.theme.primaryDim};
  margin: 0 auto;
  @media (max-width: 968px) {
    font-size: var(--small-fs);
  }
`;
