import { Title } from '../About/About.styled';
import { Container, Item, List, Video, Wrapper } from './HowToBuy.styled';

export const HowToBuy = () => {
  return (
    <Container id="how-to-Buy">
      <Wrapper>
        <Title>How to Buy</Title>
        <List>
          <Item>Go to DexScreene</Item>
          <Item>Connect Your Wallet Phantom</Item>
          <Item>Search SleepySloth Coin (SLOTH)</Item>
          <Item>Swap ETH/BSC for SLOTH</Item>
        </List>
      </Wrapper>

      <Video controls>Ваш браузер не підтримує відео.</Video>
    </Container>
  );
};
