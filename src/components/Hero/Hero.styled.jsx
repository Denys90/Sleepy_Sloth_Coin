import styled from '@emotion/styled';
import theme from '../../styles/theme';

export const Container = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0 15px 0 15px;
  margin-bottom: 45px;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    margin-bottom: 113px;
  }
`;

export const ImgSloth = styled.img`
  width: 100%;
  margin: 0 0 20px 0;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    margin-top: 80px;
  }
`;

export const Title = styled.h2`
  margin: 0;
  margin: 15px 0 15px 0;
  margin-left: auto;
  font-size: 24px;
  width: 115px;
  text-shadow: 1px 2px ${theme.colors.shadowText};

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    position: absolute;
    top: 0;
    right: 15px;
    font-size: 56px;
    width: 335px;
  }
`;

export const Paragraph = styled.p`
  margin: 0;
  margin: auto;
  font-size: 24px;
  text-shadow: 1px 2px ${theme.colors.shadowText};

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    font-size: 56px;
  }
`;
