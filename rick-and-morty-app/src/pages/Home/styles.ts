import styled from 'styled-components';

import { ThemeProps } from '../../styles/themes';

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

export const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 32px 0;

  button{
    color: ${(props: ThemeProps) => props.theme.textColor};
    background: ${(props: ThemeProps) => props.theme.backgroundColorCard};
    border: 0;
    border-radius: 4px;
    padding: 4px 16px;

    svg{
      width: 16px;
      path{
        stroke: ${(props: ThemeProps) => props.theme.textColor};
      }
    }
  }

  .prev{
    margin-left: 0;
    margin-right: auto;
    svg{
      transform: rotate(-90deg);
    }
  }

  .next{
    margin-right: 0;
    margin-left: auto;
    svg{
      transform: rotate(90deg);
    }
  }

`;
