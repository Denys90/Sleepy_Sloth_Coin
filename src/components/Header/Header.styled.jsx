import styled from '@emotion/styled';
import theme from '../../styles/theme';

export const Container = styled.div`
  height: 70px;
  border: 1px solid #240690;
  background: ${theme.colors.header};

  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ImgSloth = styled.img`
  width: 360px;
`;
export const Paragraph = styled.p`
  font-size: 32px;
`;
export const ParagraphOne = styled.p`
  margin: 0;
  margin-left: 150px;
  font-size: 32px;
  width: 220px;
`;

export const BurgerBtn = styled.button`
  border: none;
  background: none;
  cursor: pointer;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    display: none;
  }
`;

export const LinkItem = styled.a`
  color: ${theme.colors.text};
  :hover {
    color: ${theme.colors.shadowText};
  }
`;

export const BtnStyles = styled.button`
  border: none;
  background: none;
  padding: 0;
  padding-left: 32px;
  font-size: 24px;
  outline: none;
  :hover {
    color: ${theme.colors.shadowText};
  }
  :nth-of-type(1) {
    padding-left: 0;
  }
  @media screen and (max-width: ${theme.breakpoint.mobile}) {
    display: none;
  }
`;

export const BtnBuyNow = styled.button`
  border: none;
  background: none;
  outline: none;
  border: 1px solid ${theme.colors.text};
  border-radius: 25px;
  padding: 10px 14px 10px 14px;
  font-size: 24px;
  cursor: pointer;
  :hover {
    background: ${theme.colors.shadowText};
    border-color: ${theme.colors.shadowText};
  }
  @media screen and (max-width: ${theme.breakpoint.mobile}) {
    display: none;
  }
`;
