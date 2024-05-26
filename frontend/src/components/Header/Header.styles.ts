import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/bitcoin.svg';

export const HeaderContainer = styled.header`
  width: 100%;
  position: relative;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
`;

export const HeaderWrapper = styled.div`
  height: 80px;
  display: flex;
  justify-content: center;
  margin: auto;
  align-items: center;
  background: ${(props) => props.theme.blue};
`;

export const Logo = styled.div`
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: 50px 50px;
  background-position: center;
  padding: 10px 60px;
  width: 200px;
  height: 50px;
`;

export const StyledLink = styled(Link)<{ $activeTab: boolean }>`
  padding: 2px 0;
  text-decoration: none;
  font-size: var(--large-fs);
  color: ${(props) => (props.$activeTab ? props.theme.yellow : props.theme.white)};
  align-items: start;
  font-weight: 700;
  text-align: center;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    margin: -5px 0;
    background-color: ${(props) => props.theme.yellow};
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.4s ease-in-out 0s;
  }

  &:hover:before {
    visibility: visible;
    transform: scaleX(1);
  }

  @media (max-width: 968px) {
    font-size: var(--small-fs);
    min-width: 160px;
  }
  @media (max-width: 400px) {
    font-size: var(--small-fs);
    min-width: 100px;
  }
`;

export const LanguageContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 50px;
  display: flex;
  &:hover {
    cursor: pointer;
  }
`;

export const LanguageIcon = styled.img`
  height: 24px;
  width: 24px;
  transition: .3s;

  @media screen and (max-width: 440px) {
    height: 16px;
    width: 20px;
  }
`;
