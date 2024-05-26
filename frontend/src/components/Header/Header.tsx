import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  HeaderContainer,
  HeaderWrapper,
  LanguageContainer,
  LanguageIcon,
  Logo,
  StyledLink,
} from './Header.styles';
import { useTranslation } from 'react-i18next';
import useLocalStorage from '../../utils/useLocalStorage.ts';
import i18n from '../../utils/i18';
import RusIcon from '../../assets/images/rus.svg';
import EngIcon from '../../assets/images/eng.svg';

const Header = () => {
  const { t } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useLocalStorage('language', 'ru');

  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === '/' || pathname !== '/quotes') navigate('/about');
  }, [navigate, pathname]);

  function handleLanguageChange() {
    if (currentLanguage === 'en') {
      i18n.changeLanguage('ru').then();
      setCurrentLanguage('ru');
      return;
    }

    if (currentLanguage === 'ru') {
      i18n.changeLanguage('en').then();
      setCurrentLanguage('en');
    }
  }

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <StyledLink $activeTab={pathname === '/about'} to="/about">
          {t('HEADER_FIRST_TAB')}
        </StyledLink>
        <Logo />
        <StyledLink $activeTab={pathname === '/quotes'} to="/quotes">
          {t('HEADER_SECOND_TAB')}
        </StyledLink>
      </HeaderWrapper>
      <LanguageContainer onClick={handleLanguageChange}>
        <LanguageIcon src={currentLanguage === 'en' ? EngIcon : RusIcon} />
      </LanguageContainer>
    </HeaderContainer>
  );
};

export default Header;
