import styled from '@emotion/styled';
import theme from './theme';

export const ContainerStyles = styled.div`
  margin: 0 auto;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    margin: 0 auto;
    width: 1200px;
    padding-left: 15px;
    padding-right: 15px;
  }
`;
