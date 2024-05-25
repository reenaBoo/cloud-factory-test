import { AboutContainer, AboutPic, Description, Title } from './About.styles';
import AboutImg from '../../assets/images/about-pic.png';
import { TEXT } from '../../utils/Text.ts';

export const About = () => (
  <AboutContainer>
    <Title>{TEXT.ABOUT_HELLO}</Title>
    <AboutPic src={AboutImg} alt={TEXT.ABOUT_ALT} />
    <Description>{TEXT.ABOUT_DESCRIPTION}</Description>
  </AboutContainer>
);

export default About;
