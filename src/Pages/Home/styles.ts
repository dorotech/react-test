import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  header {
    width: 100vw;
    height: 100px;
    background: #222222;
    border-bottom: 1px solid #444;

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

        input {
          padding: 11px 4px;
          width: 300px;
          border-radius: 4px 0px 0px 4px;
          border: 0px;
          font-size: 14px;
        }

        button {
          padding: 10px 11px;
          border: 0px;
          border-radius: 0px 4px 4px 0px;
          cursor: pointer;
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
      width: 30.5vw;
      padding: 2vh 1.4vw;
      display: flex;
      background: #2229;
      border-radius: 4px;
      gap: 8px;
      border-bottom: 2px solid #777;

      img {
        width: 100px;
        height: 100px;
        border: 3px solid #5553;
        border-radius: 8px;
      }

      .Main-card-descriptions {
        display: flex;
        color: #efefef;
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
