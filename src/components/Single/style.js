import styled from 'styled-components';

const Styled = styled.div`
  .post {
    background-color: #fafafa;
    display: flex;
    flex-flow: row wrap;
  }

  .header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2% 5% 2% 5%;
  }

  .info {
  }

  .ava img {
    border-radius: 50%;
  }

  h1 {
    font-size: 4vw;
  }

  h2 {
    font-size: 2vw;
  }

  img {
    width: 100%;
  }

  .img {
    display: block;
    position: relative;
  }

  .after {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    transition: 0.5s ease;
    background-color: rgba(0, 0, 0, 0);
    vertical-align: middle;
    opacity: 0;
  }

  .helper {
    display: inline-block;
    height: 100%;
    vertical-align: middle;
  }

  .after img {
    width: 40%;
    vertical-align: middle;
    margin-left: 30%;
  }

  .active .after {
    animation: fadeinout 2s linear forwards;
  }

  @keyframes fadeinout {
    0%,
    100% {
      opacity: 0;
      background-color: rgba(0, 0, 0, 0);
    }
    30% {
      opacity: 1;
      background-color: rgba(0, 0, 0, 0.6);
    }
    70% {
      opacity: 1;
      background-color: rgba(0, 0, 0, 0.6);
    }
  }
`;

export default Styled;
