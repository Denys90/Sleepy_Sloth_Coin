import styled from '@emotion/styled';
import theme from '../../styles/theme';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 15px 0 15px;
  margin-bottom: 45px;
`;

export const Title = styled.h2`
  font-size: 32px;
  margin: auto;
  margin-bottom: 15px;
  text-shadow: 1px 2px ${theme.colors.shadowText};
`;
export const Paragraph = styled.p`
  font-size: 16px;
  margin-bottom: 16px;
`;
