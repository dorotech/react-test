import styled, { css } from 'styled-components';

type I_CONTAINER_PROPS = {
  isModal: boolean;
};

export const Container = styled.div<I_CONTAINER_PROPS>`
  ${(props) =>
    props.isModal &&
    css`
      filter: blur(4px);
    `}
  min-height: 100vh;
  header {
    width: 100vw;
    height: 100px;
    background: ${(props) => props.theme.colors.backgroundHeader};
    border-bottom: 1px solid ${(props) => props.theme.colors.borderHeader};

    .Header-separete-filters {
      display: flex;

      padding: 10px;

      justify-content: center;
      align-items: center;

      button {
        padding: 12px 11px;
        border: 0px;
        border-radius: 4px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .Header-group-inputs {
        display: flex;
        padding: 10px;
        gap: 2px;

        input {
          padding: 2px 4px;
          width: 250px;
          height: 30px;
          border-radius: 4px;
          border: 0px;
          font-size: 14px;
        }

        select {
          border-radius: 4px;
          padding: 2px;
          height: 30px;
        }

        button {
          padding: 10px 11px;
          border: 0px;
          border-radius: 4px;
          cursor: pointer;
          height: 30px;
        }
      }
    }

    .Header-footer {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 15px;
      margin-top: -10px;

      div {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2px;
        gap: 2px;

        input[type='radio'],
        label {
          cursor: pointer;
        }
      }
    }
  }

  main {
    width: 100vw;
    padding: 0px 20px;
    display: flex;
    padding-top: 60px;
    flex-wrap: wrap;
    gap: 20px 40px;
    overflow-x: hidden;

    /* justify-content: center; */

    .Main-card {
      cursor: pointer;
      width: 30.5vw;
      padding: 2vh 1.4vw;
      display: flex;
      background: ${(props) => props.theme.colors.backgroundCard};
      border-radius: 4px;
      gap: 8px;
      border-bottom: 2px solid ${(props) => props.theme.colors.borderCard};

      img {
        width: 100px;
        height: 100px;
        border: 3px solid ${(props) => props.theme.colors.borderHeader};
        border-radius: 8px;
      }

      .Main-card-descriptions {
        display: flex;
        color: ${(props) => props.theme.colors.text};
        flex-direction: column;
        padding: 10px;

        strong {
          font-size: 20px;
        }
        span {
          display: block;
          margin-top: 4px;
        }
      }
    }
  }
`;

export const ModalDatails = styled.div`
  .Modal-background {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    background: ${(props) => props.theme.colors.background};
    opacity: 0.1;
  }

  .Modal-content {
    width: 40vw;
    height: 240px;
    background: ${(props) => props.theme.colors.background};
    position: fixed;
    top: 0;
    z-index: 2;
    margin: 27.5vh 30vw;
    border-radius: 6px;
    padding: 20px;
    border: 1px solid ${(props) => props.theme.colors.borderHeader};
    box-shadow: 2px 0px 10px #111;

    header {
      svg {
        width: 30px;
        height: 30px;
        position: absolute;
        right: -30px;
        top: -20px;
      }
    }

    main {
      display: flex;
      justify-content: center;

      img {
        border-radius: 6px;
        width: 200px;
      }

      .Modal-Description-Infos {
        flex: 1;
        padding: 0px 20px;
        strong {
          font-size: 1.8rem;
        }
        span {
          display: block;
          padding: 4px;
          font-size: 20px;
        }

        a {
          color: ${(props) => props.theme.colors.text};
          text-decoration: none;
          padding: 4px;
          font-size: 17px;
          margin-top: 14px;
          display: block;
        }
      }
    }
  }
`;
