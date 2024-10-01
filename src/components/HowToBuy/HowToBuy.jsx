import { Container, Title } from '../About/About.styled';
import { Item, List, Video } from './HowToBuy.styled';

export const HowToBuy = () => {
  return (
    <Container id="how-to-Buy">
      <Title>How to Buy</Title>
      <List>
        <Item>Go to DexScreene</Item>
        <Item>Connect Your Wallet Phantom</Item>
        <Item>Search SleepySloth Coin (SLOTH)</Item>
        <Item>Swap ETH/BSC for SLOTH</Item>
      </List>
      <Video controls>
        {/* <source src="video.mp4" type="video/mp4"> */}
        Ваш браузер не підтримує відео.
      </Video>
    </Container>
  );
};
