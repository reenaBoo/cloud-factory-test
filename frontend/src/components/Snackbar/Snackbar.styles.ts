import styled, { keyframes } from 'styled-components';

const slide = keyframes`
    from {
        opacity: 0;
        transform: translateY(3rem);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

export const SnackbarContainer = styled.div<{ isOpen: boolean }>`
  width: 100%;
  display: flex;
  position: fixed;
  top: 80px;
  height: 35px;
  padding: 0 15px;
  animation: 300ms ease-out forwards ${slide};
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.white};
  box-shadow:
    0 3px 5px -1px rgba(0, 0, 0, 0.2),
    0 6px 10px 0 rgba(0, 0, 0, 0.14),
    0 1px 18px 0 rgba(0, 0, 0, 0.12);
`;

export const SnackbarText = styled.p`
  margin: 0;
  font-size: var(--default-fs);
  color: ${(props) => props.theme.danger};
`;

export const CloseButton = styled.button`
    position: relative;
    width: 20px;
    height: 20px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    outline: none;
    &:before,
    &:after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 15px;
        height: 2px;
        background-color: ${(props) => props.theme.blue2};
        transform-origin: center;
    }

    &:before {
        transform: translate(-50%, -50%) rotate(45deg);
    }

    &:after {
        transform: translate(-50%, -50%) rotate(-45deg);
    }

    &:hover:before,
    &:hover:after {
        background-color: ${(props) => props.theme.danger};
    }
`
