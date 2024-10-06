import {
  Container,
  Img,
  Paragraph,
  Title,
  Wrapper,
  WrapperText,
} from './About.styled';

import MobImg from 'assets/About.png'; // Зображення для мобільних пристроїв
import TabletImg from 'assets/tablet/About_x2.png'; // Зображення для планшетів
import theme from '../../styles/theme';

export const About = () => {
  return (
    <Container id="about">
      <Wrapper>
        <WrapperText>
          <Title>About</Title>
          <Paragraph>
            Forget the rush to the moon — Sleepy Sloth Coin is all about
            chilling and taking things slow. We’re not here for the
            rollercoaster; we’re here to enjoy the smooth ride. With a community
            that values relaxation over stress, Sleepy Sloth Coin embraces the
            laid-back sloth spirit. No pressure, no panic, just steady growth,
            and meme-filled fun.
          </Paragraph>
        </WrapperText>
        <Img
          src={MobImg}
          srcSet={`${TabletImg}`}
          sizes={`${theme.breakpoint.tablet}`}
          alt="Image"
        />
      </Wrapper>
    </Container>
  );
};
