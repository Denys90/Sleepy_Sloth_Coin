import AboutImg from '../../assets/About.png';
import { Container, Title } from './About.styled';

export const About = () => {
  return (
    <Container>
      <Title>About</Title>
      <p>
        Forget the rush to the moon — Sleepy Sloth Coin is all about chilling
        and taking things slow. We’re not here for the rollercoaster; we’re here
        to enjoy the smooth ride. With a community that values relaxation over
        stress, Sleepy Sloth Coin embraces the laid-back sloth spirit. No
        pressure, no panic, just steady growth, and meme-filled fun.
      </p>
      <img src={AboutImg} alt="" />
    </Container>
  );
};
