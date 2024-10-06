import styled from '@emotion/styled';
import theme from '../../styles/theme';

// import MobImg from '../../assets/mob/Picture.png';
// import TabletImg from '../../assets/tablet/About_x2.png';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 15px 0 15px;
  margin-bottom: 45px;

  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    margin-bottom: 45px;
  }
`;

export const Wrapper = styled.div`
  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    display: flex;
    flex-direction: row;
    flex-direction: row-reverse;
    align-items: center;
  }
`;

export const WrapperText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.h2`
  font-size: 32px;
  margin: auto;
  margin-bottom: 15px;
  text-shadow: 1px 2px ${theme.colors.shadowText};

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    font-size: 64px;
  }
`;

export const Paragraph = styled.p`
  font-size: 16px;
  margin-bottom: 16px;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    font-size: 24px;
  }
`;

export const Img = styled.img`
  margin: 0;
  padding: 0;
  width: 100%;
  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    width: 456px;
  }
`;
