import { FunctionComponent, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { HeaderContainer, HeaderWrapper, StyledLink, Logo } from './Header.styles';
import { TEXT } from '../../utils/Text.ts';

const Header: FunctionComponent = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === '/' || pathname !== '/quotes') navigate('/about');
  }, [navigate, pathname]);

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <StyledLink $activeTab={pathname === '/about'} to="/about">
          {TEXT.HEADER_FIRST_TAB}
        </StyledLink>
        <Logo />
        <StyledLink $activeTab={pathname === '/quotes'} to="/quotes">
          {TEXT.HEADER_SECOND_TAB}
        </StyledLink>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default Header;
