import styled from '@emotion/styled';
import theme from './theme';

export const ContainerStyles = styled.div`
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    padding-left: 132px;
    padding-right: 132px;
  }
`;
