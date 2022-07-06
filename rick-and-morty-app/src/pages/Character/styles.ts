import styled from 'styled-components';

import { ThemeProps } from '../../styles/themes';

export const Container = styled.div`
  width: 100%;
  max-width: 780px;

  margin: 0 auto;
  padding: 16px;

  h1{
    text-align: center;
    font-weight: 700;
    font-size: 2.5rem;

    margin-bottom: 24px;
  }

  button{
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 24px;
    background: transparent;
    outline: 0;
    border: 0;


    svg{
      transform: rotate(-90deg);

      path{
        stroke: ${(props: ThemeProps) => props.theme.textColor};
      }
    }

    span{
      font-weight: 500;
      color: ${(props: ThemeProps) => props.theme.textColor};
      font-size: 1rem;
    }
  }
`;

export const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;

  padding: 16px;
  background: ${(props: ThemeProps) => props.theme.backgroundColorCard};
  border-radius: 4px;

  font-weight: 500;
  font-size: 1rem;

  img{
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
  }

  .details--infos{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 16px;

    height: 100%;

    h3{
      text-align: center;
    }
  }

  .details--status{
    display: flex;
    align-items: center;
    gap: 4px;

    &--symbol{
      display: block;
      height: 10px;
      width: 10px;
      border-radius: 50%;

      &.alive{
        background: green;
      }

      &.dead{
        background: red;
      }

      &.unknown{
        background: gray;
      }
    }
  }
`;
