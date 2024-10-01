import styled from '@emotion/styled';
import theme from '../../styles/theme';

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  padding: 0 15px 0 15px;
  margin-bottom: 45px;
`;

export const ImgSloth = styled.img`
  width: 100%;
  margin: 0 0 20px 0;
`;

export const Title = styled.h2`
  margin: 0;
  margin: 15px 0 15px 0;
  margin-left: auto;
  font-size: 24px;
  width: 115px;
  text-shadow: 1px 2px ${theme.colors.shadowText};
`;

export const Paragraph = styled.p`
  margin: 0;
  margin: auto;
  font-size: 24px;
  text-shadow: 1px 2px ${theme.colors.shadowText};
`;
