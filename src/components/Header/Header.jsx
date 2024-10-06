import {
  BtnBuyNow,
  BtnStyles,
  BurgerBtn,
  Container,
  LinkItem,
} from './Header.styled';

import { RxHamburgerMenu } from 'react-icons/rx';
import Logo from 'assets/Logo.svg';
import Modal from '../Modal/Modal';
import { useState } from 'react';
import { BuyBtn, ModalItem, ModalList } from '../Modal/Modal.styled';

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <Container>
        <img src={Logo} alt="Logo" />
        <div>
          <BtnStyles type="button" onClick={() => scrollToSection('about')}>
            About
          </BtnStyles>
          <BtnStyles
            type="button"
            onClick={() => scrollToSection('how-to-Buy')}
          >
            How to Buy
          </BtnStyles>
          <BtnStyles
            type="button"
            onClick={() => scrollToSection('tokenomics')}
          >
            Tokenomics
          </BtnStyles>
        </div>
        <BtnBuyNow type="button">Buy now</BtnBuyNow>

        <BurgerBtn type="button" onClick={toggleModal}>
          <RxHamburgerMenu size={50} />
        </BurgerBtn>
      </Container>
      {isOpen && (
        <Modal onClose={toggleModal}>
          <ModalList>
            <ModalItem>
              <LinkItem href="#about" onClick={handleCloseModal}>
                About
              </LinkItem>
            </ModalItem>

            <ModalItem>
              <LinkItem href="#how-to-Buy" onClick={handleCloseModal}>
                How to Buy
              </LinkItem>
            </ModalItem>
            <ModalItem>
              <LinkItem href="#tokenomics" onClick={handleCloseModal}>
                Tokenomics
              </LinkItem>
            </ModalItem>
          </ModalList>

          <BuyBtn href="#">Buy Niow</BuyBtn>
        </Modal>
      )}
    </>
  );
};
