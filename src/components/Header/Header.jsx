import { BurgerBtn, Container, LinkItem } from './Header.styled';

import { RxHamburgerMenu } from 'react-icons/rx';
import Logo from '../../assets/Logo.svg';
import Modal from '../Modal/Modal';
import { useState } from 'react';
import { BuyBtn, ModalItem, ModalList } from '../Modal/Modal.styled';

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
