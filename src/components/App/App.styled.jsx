import styled from '@emotion/styled'

export const Container = styled.div`
  padding: 15px 30px;
`;

export const Section = styled.section`
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const TitleH1 = styled.h1`
  margin-bottom: 15px;
  font-size: 24px;
  font-weight: bold;

  &:hover {
    text-shadow: 0 0 70px #c1bec0, 0 0 20px #74366f;}
`;

export const TitleH2 = styled.h2`
  margin-bottom: 15px;
  font-size: 20px;
  font-weight: bold;

  &:hover {
    text-shadow: 0 0 70px #70074d, 0 0 20px #4f0536;}
`;
