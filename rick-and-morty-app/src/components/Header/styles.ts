import styled from 'styled-components';

import { ThemeProps } from '../../styles/themes';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 16px 24px;
  margin-bottom: 42px;

  border-bottom: 1px solid;
  border-color: ${(props: ThemeProps) => props.theme.borderColor};

  color: ${(props: ThemeProps) => props.theme.textColor};
  background: ${(props: ThemeProps) => props.theme.headerBackgroundColor};
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  svg path {
    fill: ${(props: ThemeProps) => props.theme.textColor};
  }

  span{
    font-weight: 500;
    font-size: 1.25rem;
    color: ${(props: ThemeProps) => props.theme.textColor};
  }
`;

export const Button = styled.button`
  background: transparent;
  border: 0;

  svg{
    stroke: ${(props: ThemeProps) => props.theme.textColor};
  }
`;
