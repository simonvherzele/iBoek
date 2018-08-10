import React from '../../../node_modules/@types/react/index';
import Styled from './style';

const FourOhFour = ({ history: { push }, ...rest }) => (
  <Styled {...rest}>
    <h1>Error 404</h1>
  </Styled>
);
export default FourOhFour;
