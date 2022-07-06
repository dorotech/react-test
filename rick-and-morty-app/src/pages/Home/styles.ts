import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  max-width: 1200px;

  margin: 0 auto;
  padding: 16px;
`;

export const List = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 24px;

  svg{
    grid-column-start: 1;
    grid-column-end: 4;
  }

  @media(max-width: 1000px){
    grid-template-columns: 1fr 1fr;
  }

  @media(max-width: 680px){
    grid-template-columns: 1fr;
  }
`;
