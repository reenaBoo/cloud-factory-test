import styled from 'styled-components';

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.5);
`;

export const DialogStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${(props) => props.theme.white};
  border: ${(props) => `1px solid ${props.theme.black}`};
  padding: 2rem;
  border-radius: 12px;
  width: 30rem;
  top: auto;
  margin: 0;
`;

export const DialogTitle = styled.p`
    font-size: var(--large-fs);
    font-weight: 700;
    color: ${(props) => props.theme.background};
    margin: 0 auto 1rem;
    max-width: 60%;
    @media (max-width: 968px) {
        font-size: var(--default-fs);
    }
`;

export const DialogCloseBtn = styled.div`
    padding: 0.5rem 1rem;
    margin-top: 1rem;
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme.danger};
    border-radius: 0.5rem;
    user-select: none;
    transition: 0.3s;

    &:hover {
        cursor: pointer;
        background-color: ${(props) => props.theme.dangerHover};
    }
`;
