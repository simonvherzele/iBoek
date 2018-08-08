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
`;

export default Styled;
