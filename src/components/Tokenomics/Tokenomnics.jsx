import { Container, Title } from '../About/About.styled';
import TokenomnicsIcon from '../../assets/Tokenomnics.png';
import { Element, ListElement, SlothElement } from './Tokenomnics.styled';

export const Tokenomnics = () => {
  return (
    <Container id="tokenomics">
      <Title>Tokenomnics</Title>
      <ListElement>
        <Element>Total Supply: 1 billion SLOTH tokens</Element>
        <Element>No Buy/Sell Taxes</Element>
        <SlothElement>1 000 000 000 SLOTH</SlothElement>
      </ListElement>

      <img src={TokenomnicsIcon} alt="Img" />
    </Container>
  );
};
