import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 8px;
  border-radius: 40px;
  width: 80px;

  align-items: center;
  justify-content: space-between;
  color: #9a9a9a;
  font-size: 0.9rem;
  position: absolute;
  right: 6px;
  top: 50px;

  div {
    display: flex;
    gap: 6px;
  }

  small {
    font-size: 12px;
    white-space: nowrap;
    margin-top: 5px;
    display: block;
  }

  .ball {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #9a9a9a;
  }

  @media (max-width: 600px) {
    top: 100px;
  }
`;
