import WhyRuch from '../../assets/mob/Picture.png';
import { ImgSloth, Paragraph } from '../Hero/Hero.styled';
import theme from '../../styles/theme';

import { Container, Title } from '../Hero/Hero.styled';
import WhyRuchTablet from 'assets/tablet/Hero_x2.png';

export const Hero = () => {
  return (
    <Container>
      <Title>Get Rich Slow Why Ruch?</Title>

      <ImgSloth
        src={WhyRuch}
        srcSet={`${WhyRuchTablet}`}
        sizes={`${theme.breakpoint.tablet}`}
        alt="Image"
      />

      <Paragraph>Sleepy Sloth Coin (SLOTH)</Paragraph>
    </Container>
  );
};
