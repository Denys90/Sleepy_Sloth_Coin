import WhyRuch from '../../assets/Picture.png';
import { Paragraph } from '../Hero/Hero.styled';
import { Container, ImgSloth, Title } from '../Hero/Hero.styled';

export const Hero = () => {
  return (
    <Container>
      <Title>Get Rich Slow Why Ruch?</Title>
      <ImgSloth src={WhyRuch} alt="img" />
      <Paragraph>Sleepy Sloth Coin (SLOTH)</Paragraph>
    </Container>
  );
};
