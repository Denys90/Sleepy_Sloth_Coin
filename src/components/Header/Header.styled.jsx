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
`;

export const LinkItem = styled.a`
  color: ${theme.colors.text};
  :hover {
    color: ${theme.colors.shadowText};
  }
`;
