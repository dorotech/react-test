import styled from 'styled-components';

import { ThemeProps } from '../../styles/themes';

export const Card = styled.div`
  display: flex;
  gap: 16px;

  height: 10rem;

  background: ${(props: ThemeProps) => props.theme.backgroundColorCard};
  color: ${(props: ThemeProps) => props.theme.textColor};
  border-radius: 4px;

  img{
    height: 100%;
    object-fit: cover;

    border-radius: 4px;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 16px;

  p{
    font-weight: 700;
    font-size: 1.25rem;

    margin-bottom: 16px;
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

  .more-details{
    cursor: pointer;
    font-size: 1rem;
    font-weight: 500;
  }
`;
