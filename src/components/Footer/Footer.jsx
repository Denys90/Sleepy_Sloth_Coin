import { Container, Copy, Icons, List, SleepySloth } from './Footer.styled';

import x from '../../assets/Icons/X.com.svg';
import telegram from '../../assets/Icons/Telegram.svg';

export const Footer = () => {
  return (
    <Container>
      <Icons>
        <a href="#" rel="noopener noreferrer">
          <img src={x} alt="X" />
        </a>
        <a href="https://t.me/sloth_mem" rel="noopener noreferrer">
          <img src={telegram} alt="Telegram" />
        </a>
      </Icons>

      <SleepySloth>
        SleepySloth Coin is a memecoin made for fun, not for serious investing.
        It’s just a joke and part of meme culture with no real financial value.
      </SleepySloth>
      <p>Important Notice:</p>
      <List>
        <li>
          It’s a Meme: This coin is all for laughs, not serious financial
          returns.
        </li>
        <li>
          {' '}
          Risk Warning: Memecoins are highly volatile and risky. You can lose
          your money quickly. Invest responsibly and only what you can afford to
          lose!
        </li>
      </List>
      <Copy> &copy; 2024 by SLOTHY. All rights reserved!</Copy>
    </Container>
  );
};
