import styled from 'styled-components';

export const ErrorDialogText = styled.p`
  font-size: var(--default-fs);
  color: ${(props) => props.theme.danger};
  margin: 0 auto;
  @media (max-width: 968px) {
    font-size: var(--small-fs);
  }
`;

export const AlertImg = styled.img`
  margin: 1em;
  width: 10rem;
  height: 10rem;
`;
