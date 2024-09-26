import { Container } from './Header.styled';

import { RxHamburgerMenu } from 'react-icons/rx';
import Logo from '../../assets/Logo.svg';

export const Header = () => {
  return (
    <Container>
      <img src={Logo} alt="Logo" />
      <RxHamburgerMenu size={50} />
    </Container>
  );
};
