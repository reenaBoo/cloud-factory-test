import { AboutContainer, AboutPic, Description, Title } from './About.styles';
import AboutImg from '../../assets/images/about-pic.png';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <AboutContainer>
      <Title>{t('ABOUT_HELLO')}</Title>
      <AboutPic src={AboutImg} alt={t('ABOUT_ALT')} />
      <Description>{t('ABOUT_DESCRIPTION')}</Description>
    </AboutContainer>
  );
};

export default About;
