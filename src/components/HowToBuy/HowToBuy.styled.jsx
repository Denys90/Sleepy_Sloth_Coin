import styled from '@emotion/styled';
import theme from '../../styles/theme';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 15px 0 15px;
  margin-bottom: 45px;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    flex-direction: row;
    margin-bottom: 113px;
  }
`;
export const Wrapper = styled.div`
  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    width: 515px;
    margin-right: 85px;
  }
`;
export const List = styled.ol`
  /* margin: auto; */
  margin-bottom: 44px;
`;
export const Item = styled.li`
  font-size: 16px;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    font-size: 24px;
  }
`;
export const Video = styled.video`
  width: 100%;
`;
