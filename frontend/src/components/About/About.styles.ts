import styled from 'styled-components';

export const AboutContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: 30px;
  color: ${(props) => props.theme.text};
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 30px auto 16px;
`;

export const Description = styled.p`
  font-size: var(--default-fs);
  text-align: center;
  margin: 20px auto;
  max-width: 70%;
  color: ${(props) => props.theme.text};
  @media (max-width: 968px) {
    font-size: var(--small-fs);
  }
`;

export const AboutPic = styled.img`
  width: 60%;
  height: 60%;
  display: inline-block;
  border-radius: 32px;
  box-shadow: 0 -2px 10px 8px rgba(238, 238, 238, 0.6);
  @media (max-width: 968px) {
    width: 60%;
    height: 60%;
  }
`;
