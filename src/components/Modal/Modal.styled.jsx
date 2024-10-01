import styled from '@emotion/styled';
import theme from '../../styles/theme';

export const Popup = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s;
`;
export const ModalWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 450px;
  height: 350px;
`;

export const ModalContent = styled.div`
  position: relative;
  width: 100vw;
  height: 100%;
  padding: 20px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  background-color: ${theme.colors.header};
  margin: 16px;
  transform: translateY(-50px);
  transition:
    opacity 0.3s,
    transform 0.3s;
`;

export const CloseButton = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0;
  color: ${theme.colors.text};
  cursor: pointer;
  &:hover {
    color: ${theme.colors.shadowText};
    transition: background-color 0.5s ease;
  }
`;

export const BuyBtn = styled.a`
  display: block;
  width: 100%;
  color: black;
  padding: 10px;
  text-align: center;
  border-radius: 5px;
  background: ${theme.colors.white};
  :hover {
    background: ${theme.colors.shadowText};
  }
`;

export const ModalList = styled.ul`
  font-size: 32px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 40px;
`;

export const ModalItem = styled.li`
  margin-bottom: 30px;
  :nth-child(3) {
    margin-bottom: 0;
  }
`;
