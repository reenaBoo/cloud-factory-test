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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${(props) => props.theme.white};
  padding: 32px;
  border-radius: 12px;
  width: 480px;
  margin: 0;
`;

export const DialogTitle = styled.p`
    font-size: var(--large-fs);
    font-weight: 700;
    color: ${(props) => props.theme.blue2};
    margin: 0 auto 16px;
    @media (max-width: 968px) {
        font-size: var(--default-fs);
    }
`;

export const DialogCloseBtn = styled.div`
    padding: 8px 16px;
    margin-top: 16px;
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme.danger};
    border-radius: 8px;
    user-select: none;
    transition: 0.3s;

    &:hover {
        cursor: pointer;
        background-color: ${(props) => props.theme.dangerHover};
    }
`;
